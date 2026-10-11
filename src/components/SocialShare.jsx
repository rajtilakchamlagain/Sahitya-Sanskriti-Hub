import { useState } from 'react';
import html2canvas from 'html2canvas';
import { Share2, Check } from 'lucide-react';

const SocialShare = ({ elementRef, title = "Sahitya Sanskriti Hub" }) => {
    const [isSharing, setIsSharing] = useState(false);
    const [status, setStatus] = useState('idle'); // idle, capturing, success, copied

    const handleShare = async () => {
        if (isSharing) return;
        setIsSharing(true);

        const currentUrl = window.location.href;
        const shareData = {
            title: title,
            text: `Read "${title}" at Sahitya Sanskriti Hub`,
            url: currentUrl
        };

        // 1. If elementRef is provided and has a DOM node, try generating the graphic card
        if (elementRef && elementRef.current) {
            setStatus('capturing');
            try {
                const canvas = await html2canvas(elementRef.current, {
                    scale: 2,
                    backgroundColor: null,
                    logging: false,
                    useCORS: true
                });

                canvas.toBlob(async (blob) => {
                    if (blob && navigator.share && navigator.canShare && navigator.canShare({ files: [new File([blob], 'share.png', { type: 'image/png' })] })) {
                        const file = new File([blob], `${title.replace(/\s+/g, '_')}.png`, { type: 'image/png' });
                        try {
                            await navigator.share({ ...shareData, files: [file] });
                            setStatus('success');
                        } catch (err) {
                            if (err.name !== 'AbortError') {
                                fallbackShareOrCopy(shareData);
                            }
                        }
                    } else {
                        fallbackShareOrCopy(shareData);
                    }
                    setTimeout(() => setStatus('idle'), 2500);
                    setIsSharing(false);
                }, 'image/png');
                return;
            } catch (err) {
                console.warn('Canvas capture fallback to link share:', err);
            }
        }

        // 2. Direct Web Share API or Clipboard Copy (Works everywhere without elementRef)
        await fallbackShareOrCopy(shareData);
        setTimeout(() => setStatus('idle'), 2500);
        setIsSharing(false);
    };

    const fallbackShareOrCopy = async (data) => {
        if (navigator.share) {
            try {
                await navigator.share(data);
                setStatus('success');
                return;
            } catch (err) {
                if (err.name === 'AbortError') {
                    setStatus('idle');
                    return;
                }
            }
        }

        // Final fallback: copy link to clipboard
        try {
            await navigator.clipboard.writeText(data.url);
            setStatus('copied');
        } catch (err) {
            console.error('Clipboard copy failed:', err);
            setStatus('idle');
        }
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
            title="Share this page"
            aria-label="Share"
        >
            {status === 'success' || status === 'copied' ? <Check size={18} /> : <Share2 size={18} />}
            <span style={{ fontWeight: 600, fontSize: '14px' }}>
                {status === 'capturing' ? 'कृपया प्रतीक्षा...' : status === 'copied' ? 'Link Copied!' : status === 'success' ? 'Shared!' : 'Share'}
            </span>
        </button>
    );
};

export default SocialShare;
