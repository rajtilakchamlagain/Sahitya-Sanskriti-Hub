import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const SubscribeSection = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = (email) => {
        // Basic Regex for valid email address formats
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (!email) {
            setErrorMessage('Please enter an email address.');
            setStatus('error');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            setStatus('error');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            // Write to Firestore 'subscribers' collection
            await addDoc(collection(db, 'subscribers'), {
                email: email,
                subscribedAt: serverTimestamp(),
                status: 'active',
                source: 'homepage_footer'
            });

            // Trigger EmailJS Notification (To CEO)
            try {
                await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    {
                        name: 'New Subscriber',
                        email: email,
                        title: 'New Newsletter Subscription',
                        message: `A new user has joined the Sahitya Circle newsletter: ${email}`
                    },
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                );
            } catch (emailError) {
                console.error("EmailJS error (Subscriber): ", emailError);
            }

            setStatus('success');
            setEmail('');

            // Note: If you encounter "Missing or insufficient permissions" in the console,
            // the user needs to update their Firestore security rules to allow writes to 'subscribers'.
            // rules_version = '2';
            // service cloud.firestore {
            //   match /databases/{database}/documents {
            //     match /subscribers/{document=**} {
            //       allow read, write: if true; 
            //     }
            //   }
            // }

        } catch (error) {
            console.error("Subscription error: ", error);
            setStatus('error');
            setErrorMessage('Failed to join the circle. Please try again later.');
        }
    };

    return (
        <section style={{
            padding: '60px 24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        }}>
            <div style={{
                width: '100%',
                maxWidth: '800px',
                backgroundColor: 'var(--bg-glass-heavy)',
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                borderRadius: '32px',
                border: '1px solid var(--primary-glow)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
                padding: '48px 32px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>

                {/* Decorative background glow */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '300px',
                    height: '300px',
                    background: 'var(--accent-gold-glow)',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />

                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '20px',
                        backgroundColor: 'var(--bg-core)',
                        border: '1px solid var(--primary-maroon)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px var(--primary-glow)'
                    }}>
                        <Mail size={32} color="var(--accent-gold)" strokeWidth={1.5} />
                    </div>

                    <div style={{ maxWidth: '500px' }}>
                        <h2 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '28px',
                            color: 'var(--text-main)',
                            margin: '0 0 12px 0',
                            letterSpacing: '-0.5px'
                        }}>
                            Join The Weekly Sahitya Circle
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: 'var(--text-muted)',
                            lineHeight: '1.6',
                            margin: 0
                        }}>
                            Get curated Himalayan literature, untold stories of Gorkha valor, and philosophical insights delivered quietly to your inbox every week. No spam. Just heritage.
                        </p>
                    </div>

                    {status === 'success' ? (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '16px 24px',
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            border: '1px solid rgba(16, 185, 129, 0.2)',
                            borderRadius: '16px',
                            color: '#10b981',
                            animation: 'fadeIn 0.5s ease-out'
                        }}>
                            <CheckCircle2 size={24} />
                            <span style={{ fontWeight: 500 }}>Welcome to the Circle. We'll be in touch soon.</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubscribe} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            width: '100%',
                            maxWidth: '400px'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: 'var(--bg-core)',
                                border: `1px solid ${status === 'error' ? 'red' : 'var(--primary-glow)'}`,
                                borderRadius: '16px',
                                padding: '6px 6px 6px 16px',
                                transition: 'all 0.3s ease',
                                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
                            }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email address..."
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (status === 'error') setStatus('idle'); // clear error on type
                                    }}
                                    disabled={status === 'loading'}
                                    style={{
                                        flex: 1,
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        color: 'var(--text-main)',
                                        fontSize: '15px',
                                        padding: '10px 0',
                                        fontFamily: 'var(--font-body)',
                                        minWidth: 0 // fixes flexbox overflow issues on mobile
                                    }}
                                />
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '12px 20px',
                                        backgroundColor: 'var(--primary-maroon)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '12px',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 12px rgba(159, 18, 57, 0.3)',
                                        opacity: status === 'loading' ? 0.7 : 1
                                    }}
                                    onMouseOver={(e) => !status.loading && (e.currentTarget.style.transform = 'translateY(-2px)')}
                                    onMouseOut={(e) => !status.loading && (e.currentTarget.style.transform = 'translateY(0)')}
                                >
                                    {status === 'loading' ? (
                                        <Loader2 size={18} style={{ animation: 'spin 2s linear infinite' }} />
                                    ) : (
                                        <>
                                            Join <ArrowRight size={16} />
                                        </>
                                    )}
                                </button>
                            </div>

                            {status === 'error' && (
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: '#ef4444',
                                    fontSize: '13px',
                                    justifyContent: 'center',
                                    animation: 'fadeIn 0.3s ease-out'
                                }}>
                                    <AlertCircle size={14} />
                                    <span>{errorMessage}</span>
                                </div>
                            )}
                        </form>
                    )}

                    <style>{`
                        @keyframes spin { 100% { transform: rotate(360deg); } }
                        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                    `}</style>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;
