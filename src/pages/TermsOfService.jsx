import React, { useEffect } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Footer from '../components/Footer';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: 'var(--bg-paper)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main className="container" style={{ flex: 1, padding: '40px 24px', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-maroon)', marginBottom: '24px', fontSize: '2.5rem' }}>
                    Terms of Service
                </h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <div className="terms-content" style={{ color: 'var(--text-charcoal)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                    <h2 style={{ color: 'var(--primary-maroon)', marginTop: '32px', marginBottom: '16px' }}>1. Introduction</h2>
                    <p>Welcome to SahityaSanskritiHub. By accessing or using our website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>

                    <h2 style={{ color: 'var(--primary-maroon)', marginTop: '32px', marginBottom: '16px' }}>2. Content and Copyright</h2>
                    <p>All literature, articles, poems, stories, and images displayed on this website are the intellectual property of their respective authors (e.g., Dr. Tilak Sarmah) or used with permission. You may not reproduce, distribute, or modify our content without explicit written consent.</p>

                    <h2 style={{ color: 'var(--primary-maroon)', marginTop: '32px', marginBottom: '16px' }}>3. User Conduct</h2>
                    <p>When leaving comments or interacting with our platform, you agree to treat others with respect. We reserve the right to remove any content or comments that are deemed offensive, spam, or inappropriate.</p>

                    <h2 style={{ color: 'var(--primary-maroon)', marginTop: '32px', marginBottom: '16px' }}>4. Google AdSense & Third-Party Ads</h2>
                    <p>We use Google AdSense to display advertisements. Google uses cookies to serve ads based on a user's prior visits to our website or other websites. You may opt out of personalized advertising by visiting Google's Ads Settings.</p>

                    <h2 style={{ color: 'var(--primary-maroon)', marginTop: '32px', marginBottom: '16px' }}>5. Disclaimer of Warranties</h2>
                    <p>The materials on SahityaSanskritiHub are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                    <h2 style={{ color: 'var(--primary-maroon)', marginTop: '32px', marginBottom: '16px' }}>6. Contact Us</h2>
                    <p>If you have any questions about these Terms of Service, please contact us at:</p>
                    <p style={{ fontWeight: 'bold' }}>Email: rjtiksrm@gmail.com</p>
                </div>
            </main>
            <Footer />
            <BottomNav />
        </div>
    );
};

export default TermsOfService;
