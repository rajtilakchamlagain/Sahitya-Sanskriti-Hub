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

                // If permission is already granted, don't show the prompt
                if (OneSignal.Notifications.permission === true || OneSignal.Notifications.permission === 'granted') {
                    console.log("User already subscribed. Prompt will not be shown.");
                    return;
                }

                const timer = setTimeout(() => {
                    // Double check permission again before showing
                    if (OneSignal.Notifications.permission === true || OneSignal.Notifications.permission === 'granted') {
                        return;
                    }
                    console.log("Showing Premium Opt-In Prompt");
                    setShowPrompt(true);
                }, 15000); // 15 seconds delay

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
        // Notification Toast UI (Fixed bottom right or center bottom)
        <div style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 99999, // Ensure it's on top of everything
            animation: isExiting ? 'slideOutRight 0.5s forwards' : 'slideInUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }} className="premium-notification-toast">

            {/* Styles for animation */}
            <style>
                {`
                    @keyframes slideInUp {
                        from { opacity: 0; transform: translateY(50px) scale(0.9); }
                        to { opacity: 1; transform: translateY(0) scale(1); }
                    }
                    @keyframes slideOutRight {
                        to { opacity: 0; transform: translateX(100px); }
                    }
                    @media (max-width: 768px) {
                        .premium-notification-toast {
                            right: 16px !important;
                            left: 16px !important;
                            bottom: 16px !important;
                            width: calc(100% - 32px);
                        }
                    }
                `}
            </style>

            <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                borderRadius: '16px',
                padding: '24px',
                width: '100%',
                maxWidth: '380px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden',
                margin: '0 auto'
            }}>

                {/* Decorative golden accent at top */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #F9D423 0%, #D4AF37 100%)'
                }}></div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                        background: 'rgba(212, 175, 55, 0.1)',
                        padding: '12px',
                        borderRadius: '50%',
                        color: 'var(--accent-gold)'
                    }}>
                        <Bell size={24} />
                    </div>
                    <div>
                        <h3 style={{
                            margin: 0,
                            fontFamily: 'var(--font-heading)',
                            color: '#1a1a1a',
                            fontSize: '18px',
                            fontWeight: 700,
                            marginBottom: '4px'
                        }}>
                            Never Miss an Update
                        </h3>
                        <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.5', fontFamily: 'var(--font-body)' }}>
                            Get a quick notification whenever a new poem, story, or article is published.
                        </p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                    <button
                        onClick={handleDismiss}
                        style={{
                            flex: 1,
                            padding: '10px',
                            background: '#f3f4f6',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#4b5563',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-body)',
                            transition: 'background 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.background = '#e5e7eb'}
                        onMouseOut={(e) => e.target.style.background = '#f3f4f6'}
                    >
                        Maybe Later
                    </button>
                    <button
                        onClick={handleEnable}
                        style={{
                            flex: 1,
                            padding: '10px',
                            background: '#1a1a1a',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '14px',
                            fontWeight: 600,
                            color: 'var(--accent-gold)',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            fontFamily: 'var(--font-body)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-1px)';
                            e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                        }}
                    >
                        Enable
                        <ShieldCheck size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OneSignalInitializer;
