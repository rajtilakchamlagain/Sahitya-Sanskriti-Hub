import { useState } from 'react';
import { PenTool, CheckCircle2, AlertCircle, Loader2, BookOpen, Quote, Globe, FileText, Compass, Languages } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const WriteForUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: '',
        category: 'poetry',
        content: '',
        isOriginal: false
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {






        
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (status === 'error') setStatus('idle');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.name || !formData.email || !formData.bio || !formData.content) {
            setErrorMessage('Please fill out all text fields.');
            setStatus('error');
            return;
        }

        if (!formData.isOriginal) {
            setErrorMessage('You must confirm that your submission is an original work.');
            setStatus('error');
            return;
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrorMessage('Please enter a valid email address.');
            setStatus('error');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            await addDoc(collection(db, 'submissions'), {
                ...formData,
                submittedAt: serverTimestamp(),
                status: 'pending' // For the editor to review
            });

            // Trigger EmailJS Notification (To CEO)
            try {
                await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    {
                        name: formData.name,
                        email: formData.email,
                        title: `New Guest Submission: ${formData.category}`,
                        message: `You have received a new manuscript submission for the category: ${formData.category}.\n\nBio: ${formData.bio}\n\nPlease check Firebase to review the complete manuscript.`
                    },
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                );
            } catch (emailError) {
                console.error("EmailJS error (Guest Submission): ", emailError);
            }

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                bio: '',
                category: 'poetry',
                content: '',
                isOriginal: false
            });

            // Remember to update Firebase Rules:
            // match /submissions/{document=**} {
            //   allow create: if true; // Allow anyone to submit
            //   allow read, update, delete: if false; // Only admin via Firebase console
            // }

        } catch (error) {
            console.error("Submission error: ", error);
            setStatus('error');
            setErrorMessage('Failed to send submission. Please try again later.');
        }
    };

    return (
        <div className="section-reset" style={{ minHeight: '100vh', padding: '40px 24px', position: 'relative' }}>
            {/* Background Texture/Gradient */}
            <div style={{
                position: 'fixed',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'var(--accent-gold-glow)',
                borderRadius: '50%',
                filter: 'blur(150px)',
                zIndex: -1,
                opacity: 0.5,
                pointerEvents: 'none'
            }} />

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>

                {/* Section 1: Hero */}
                <header style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: 'var(--bg-glass)', border: '1px solid var(--primary-glow)', borderRadius: '20px', color: 'var(--accent-gold)', marginBottom: '24px', fontSize: '14px', fontWeight: 600, letterSpacing: '1px' }}>
                        <PenTool size={16} />
                        <span>SANSKRITI SANGAM (संस्कृति संगम)</span>
                    </div>
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--text-main)', margin: '0 0 16px 0', lineHeight: '1.2' }}>
                        Your words.<br />Our heritage.
                    </h1>
                    <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
                        Every mountain has a thousand unheard stories. SahityaSanskritiHub is expanding its premium archives, and we are looking for the next voices of our culture.
                    </p>
                </header>

                {/* Section 2: Guidelines */}
                <section style={{ backgroundColor: 'var(--bg-glass-heavy)', backdropFilter: 'blur(16px)', borderRadius: '24px', padding: '32px', border: '1px solid var(--border-color)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--text-main)', margin: '0 0 24px 0', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                        The Quality Standard
                    </h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
                        To maintain the prestige of the archive, we review every piece manually. We welcome original, deeply thoughtful submissions in the following categories:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ color: 'var(--accent-gold)' }}><Quote size={24} /></div>
                            <div>
                                <h3 style={{ fontSize: '16px', color: 'var(--text-main)', margin: '0 0 4px 0' }}>Himalayan Poetry</h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>Nepali or English. Open format.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ color: 'var(--accent-gold)' }}><Globe size={24} /></div>
                            <div>
                                <h3 style={{ fontSize: '16px', color: 'var(--text-main)', margin: '0 0 4px 0' }}>Cultural Essays</h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>Reflections on identity or migration. (500–1200 words)</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ color: 'var(--accent-gold)' }}><BookOpen size={24} /></div>
                            <div>
                                <h3 style={{ fontSize: '16px', color: 'var(--text-main)', margin: '0 0 4px 0' }}>Scholarly Research</h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>Analyses of literature & history. (800–2000 words)</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ color: 'var(--accent-gold)' }}><FileText size={24} /></div>
                            <div>
                                <h3 style={{ fontSize: '16px', color: 'var(--text-main)', margin: '0 0 4px 0' }}>Short Stories (Kathaa)</h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>Original fiction rooted in Himalayan experiences. (1000-2500 words)</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ color: 'var(--accent-gold)' }}><Compass size={24} /></div>
                            <div>
                                <h3 style={{ fontSize: '16px', color: 'var(--text-main)', margin: '0 0 4px 0' }}>Travelogues & Memoirs</h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>Personal journeys through the North-East or Nepal. (800-1500 words)</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ color: 'var(--accent-gold)' }}><Languages size={24} /></div>
                            <div>
                                <h3 style={{ fontSize: '16px', color: 'var(--text-main)', margin: '0 0 4px 0' }}>Literature Translations</h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>Translating vernacular masterpieces into English.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Submission Pipeline */}
                <section>
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--text-main)', margin: '0 0 8px 0' }}>Submit to the Archive</h2>
                        <p style={{ color: 'var(--text-muted)', margin: 0 }}>Begin your 3-step submission process below.</p>
                    </div>

                    {status === 'success' ? (
                        <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '24px', padding: '48px 32px', textAlign: 'center', animation: 'fadeIn 0.5s ease-out' }}>
                            <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 16px auto' }} />
                            <h3 style={{ fontSize: '24px', color: 'var(--text-main)', margin: '0 0 12px 0' }}>The Archive has received your words.</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '500px', margin: '0 auto' }}>
                                Thank you for trusting SahityaSanskritiHub. Our editorial team (led by Dr. Tilak Sarmah) takes the time to personally read every piece. You can expect to hear back from us via email within 7-10 business days.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

                            {/* Step 1: Pitch */}
                            <div style={{ backgroundColor: 'var(--bg-glass-heavy)', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--primary-glow)', color: 'var(--primary-maroon)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
                                    <h3 style={{ fontSize: '20px', color: 'var(--text-main)', margin: 0 }}>The Pitch (Who are you?)</h3>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: 500 }}>Full Name</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="e.g. Rajat Sharma" required />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: 500 }}>Email Address</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="e.g. writer@university.edu" required />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: '1 / -1' }}>
                                        <label style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: 500 }}>Author Bio (2-3 Sentences)</label>
                                        <textarea name="bio" value={formData.bio} onChange={handleChange} className="form-input" placeholder="e.g. Rajat is a literature student specializing in diaspora narratives..." rows="2" required></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2: Draft */}
                            <div style={{ backgroundColor: 'var(--bg-glass-heavy)', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--primary-glow)', color: 'var(--primary-maroon)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
                                    <h3 style={{ fontSize: '20px', color: 'var(--text-main)', margin: 0 }}>The Draft (Your Voice)</h3>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: 500 }}>Category</label>
                                        <select name="category" value={formData.category} onChange={handleChange} className="form-input" style={{ appearance: 'auto' }} required>
                                            <option value="poetry">Himalayan Poetry</option>
                                            <option value="essay">Cultural Essay / Memoir</option>
                                            <option value="research">Scholarly Research</option>
                                            <option value="story">Short Story (Kathaa)</option>
                                            <option value="travelogue">Travelogue / Memoir</option>
                                            <option value="translation">Literature Translation</option>
                                        </select>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: 500 }}>Your Manuscript</label>
                                        <textarea name="content" value={formData.content} onChange={handleChange} className="form-input" placeholder="Paste your masterpiece here..." rows="12" required style={{ resize: 'vertical' }}></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3: Promise */}
                            <div style={{ backgroundColor: 'var(--bg-glass-heavy)', padding: '32px', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--primary-glow)', color: 'var(--primary-maroon)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
                                    <h3 style={{ fontSize: '20px', color: 'var(--text-main)', margin: 0 }}>The Promise</h3>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '32px' }}>
                                    <input
                                        type="checkbox"
                                        id="originality"
                                        name="isOriginal"
                                        checked={formData.isOriginal}
                                        onChange={handleChange}
                                        style={{ marginTop: '4px', cursor: 'pointer', width: '20px', height: '20px', accentColor: 'var(--primary-maroon)' }}
                                    />
                                    <label htmlFor="originality" style={{ color: 'var(--text-muted)', lineHeight: '1.5', cursor: 'pointer', fontSize: '15px' }}>
                                        I confirm that this manuscript is entirely my own original work and respects the dignity of the Himalayan cultures.
                                    </label>
                                </div>

                                {status === 'error' && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '12px 16px', borderRadius: '12px', marginBottom: '24px' }}>
                                        <AlertCircle size={18} />
                                        <span style={{ fontSize: '14px', fontWeight: 500 }}>{errorMessage}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '12px',
                                        width: '100%',
                                        padding: '16px',
                                        backgroundColor: 'var(--primary-maroon)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '16px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 8px 24px rgba(159, 18, 57, 0.3)',
                                        opacity: status === 'loading' ? 0.7 : 1
                                    }}
                                >
                                    {status === 'loading' ? (
                                        <><Loader2 size={20} style={{ animation: 'spin 2s linear infinite' }} /> Submitting Archive...</>
                                    ) : (
                                        'Submit to Archive'
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </section>

                <style>{`
                    .form-input {
                        width: 100%;
                        background-color: var(--bg-core);
                        border: 1px solid var(--border-color);
                        color: var(--text-main);
                        padding: 14px 16px;
                        border-radius: 12px;
                        font-family: var(--font-body);
                        font-size: 15px;
                        transition: all 0.3s ease;
                        outline: none;
                    }
                    .form-input:focus {
                        border-color: var(--primary-maroon);
                        box-shadow: 0 0 0 3px var(--primary-glow);
                    }
                    .form-input::placeholder {
                        color: var(--text-light);
                        opacity: 0.5;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default WriteForUs;
