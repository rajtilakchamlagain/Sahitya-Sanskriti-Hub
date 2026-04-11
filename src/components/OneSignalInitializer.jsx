import { useEffect, useState } from 'react';
import OneSignal from 'react-onesignal';
import { Feather, Bell, X, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OneSignalInitializer = () => {
    const [showPrompt, setShowPrompt] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const runOneSignal = async () => {
            try {
                await OneSignal.init({
                    appId: "d27f9ebb-440c-4e64-87e7-d2ae464c4439",
                    safari_web_id: "web.onesignal.auto.1947bcbb-3df5-45a5-b464-0be0e15f4a2c",
                    notifyButton: {
                        enable: false, // User requested to remove the bell icon
                    },
                    allowLocalhostAsSecureOrigin: true,
                    // Disable auto-prompt so we can show our custom Premium UI
                    promptOptions: {
                        slidedown: {
                            prompts: []
                        }
                    }
                });

                // Check current permission state
                // We only want to show the prompt if the user has NOT granted permission yet
                // AND has not blocked it (though we can't force it if blocked, we can at least try to persuade if it's 'default')

                // OneSignal v16 accessor for permission
                const permission = OneSignal.Notifications.permission;
                console.log("OneSignal Permission State:", permission);

                if (permission === true || permission === 'granted') {
                    console.log("User already subscribed. specific prompt will not be shown.");
                    return; // EXIT: Do not show the prompt
                }

                // If we are here, permission is likely 'default' (not prompted yet) or 'denied' (which we can't fix easily but might want to re-ask if enough time passed)
                // For now, we assume 'default' is the target.

                const timer = setTimeout(() => {
                    // Double check permission again before showing (in case they enabled it in another tab or quickly)
                    if (OneSignal.Notifications.permission === true || OneSignal.Notifications.permission === 'granted') {
                        return;
                    }
                    console.log("Showing Premium Opt-In Prompt");
                    setShowPrompt(true);
                }, 30000); // 30 seconds delay

                return () => clearTimeout(timer);

            } catch (error) {
                console.error("OneSignal init error:", error);
            }
        };

        runOneSignal();
    }, []);

    const handleEnable = async () => {
        try {
            // Trigger the native browser prompt
            await OneSignal.Notifications.requestPermission();
            handleDismiss();
        } catch (err) {
            console.error(err);
            // Fallback for older browsers if needed, or V15 SDK
            OneSignal.Slidedown.promptPush();
            handleDismiss();
        }
    };

    const handleDismiss = () => {
        setIsExiting(true);
        setTimeout(() => setShowPrompt(false), 500); // Wait for exit animation
    };

    if (!showPrompt) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dimmed backdrop
            backdropFilter: 'blur(4px)', // Premium glass blur
            animation: isExiting ? 'fadeOut 0.5s forwards' : 'fadeIn 0.5s ease-out'
        }} className="premium-notification-overlay">

            {/* Styles for animation */}
            <style>
                {`
                    @keyframes scaleUp {
                        from { opacity: 0; transform: scale(0.9) translateY(20px); }
                        to { opacity: 1; transform: scale(1) translateY(0); }
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes fadeOut {
                        to { opacity: 0; }
                    }
                `}
            </style>

            <div style={{
                backgroundColor: '#FFFBF5', // Premium parchment paper color
                border: '1px solid var(--accent-gold)',
                borderRadius: '16px',
                padding: '32px', // Increased padding
                width: '90%',
                maxWidth: '400px', // Slightly wider
                boxShadow: '0 20px 60px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.1)', // Deeper shadow
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
                overflow: 'hidden',
                animation: isExiting ? 'none' : 'scaleUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s backwards'
            }}>

                {/* Decorative golden accent at top */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #C5A028, #E5C560, #C5A028)'
                }}></div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
                    {/* Centered Large Icon */}
                    <div style={{
                        marginBottom: '4px'
                    }}>
                        {/* <img
                            src="/logo.png"
                            alt="Logo"
                            style={{
                                width: '120px',
                                height: '120px',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 8px 24px rgba(139, 0, 0, 0.2))'
                            }}
                        /> */}
                    </div>

                    <div>
                        <h3 style={{
                            margin: 0,
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--primary-maroon)',
                            fontSize: '22px', // Larger Title
                            fontWeight: 600,
                            marginBottom: '8px'
                        }}>
                            Stay Inspired
                        </h3>
                        <div style={{ fontSize: '15px', color: 'var(--text-charcoal)', lineHeight: '1.6' }}>
                            Join our community of literature lovers to receive new works directly.
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                    <button
                        onClick={handleDismiss}
                        style={{
                            flex: 1,
                            padding: '12px',
                            border: '1px solid rgba(0,0,0,0.1)',
                            background: 'transparent',
                            borderRadius: '8px',
                            fontSize: '15px',
                            fontWeight: 500,
                            color: 'var(--text-muted)',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-body)',
                            transition: 'background 0.2s'
                        }}
                    >
                        Maybe Later
                    </button>
                    <button
                        onClick={handleEnable}
                        style={{
                            flex: 1,
                            padding: '12px',
                            background: 'var(--primary-maroon)',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '15px',
                            fontWeight: 500,
                            color: 'white',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(139, 0, 0, 0.2)',
                            fontFamily: 'var(--font-body)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            transition: 'transform 0.2s'
                        }}
                    >
                        Enable Updates
                        <ShieldCheck size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OneSignalInitializer;
