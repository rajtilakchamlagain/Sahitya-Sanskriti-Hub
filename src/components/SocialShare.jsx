import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Share2, Download, Check } from 'lucide-react';

const SocialShare = ({ elementRef, title }) => {
    const [isSharing, setIsSharing] = useState(false);
    const [status, setStatus] = useState('idle'); // idle, capturing, success

    const handleShare = async () => {
        if (!elementRef.current || isSharing) return;
        setIsSharing(true);
        setStatus('capturing');

        try {
            // Capture the element
            const canvas = await html2canvas(elementRef.current, {
                scale: 3, // High Definition for sharing
                backgroundColor: null, // Transparent to let card background show
                logging: false,
                useCORS: true
            });

            canvas.toBlob(async (blob) => {
                if (!blob) throw new Error('Blob creation failed');

                const file = new File([blob], `${title.replace(/\s+/g, '_')}_Poem.png`, { type: 'image/png' });
                const shareData = {
                    title: `Read "${title}" at SahityaSanskritiHub`,
                    text: `Check out this beautiful poem "${title}" by Dr. Tilak Sarmah.`,
                    files: [file],
                    url: window.location.href // Fallback link
                };

                // Use Web Share API if supported and can share files
                if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                    try {
                        await navigator.share(shareData);
                        setStatus('success');
                    } catch (err) {
                        if (err.name !== 'AbortError') {
                            console.error('Share failed', err);
                            downloadFallback(canvas);
                        } else {
                            setStatus('idle');
                        }
                    }
                } else {
                    // Fallback to simple download
                    downloadFallback(canvas);
                }

                setTimeout(() => setStatus('idle'), 3000);
                setIsSharing(false);
            }, 'image/png');

        } catch (error) {
            console.error('Capture failed:', error);
            setStatus('idle');
            setIsSharing(false);
        }
    };

    const downloadFallback = (canvas) => {
        const link = document.createElement('a');
        link.download = `${title.replace(/\s+/g, '_')}_Poem.png`;
        link.href = canvas.toDataURL();
        link.click();
        setStatus('success');
    };

    return (
        <button
            onClick={handleShare}
            disabled={isSharing}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                border: '1px solid var(--primary-maroon)',
                borderRadius: '30px',
                background: 'transparent',
                color: 'var(--primary-maroon)',
                cursor: isSharing ? 'wait' : 'pointer',
                transition: 'all 0.3s ease'
            }}
        >
            {status === 'success' ? <Check size={20} /> : <Share2 size={20} />}
            <span style={{ fontWeight: 600, fontSize: '14px' }}>
                {status === 'capturing' ? 'Generating...' : status === 'success' ? 'Shared!' : 'Share'}
            </span>
        </button>
    );
};

export default SocialShare;
