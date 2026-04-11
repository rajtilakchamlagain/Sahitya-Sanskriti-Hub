import React, { useState } from 'react';
import { Share2, Copy, Check, Facebook, Twitter, Image as ImageIcon } from 'lucide-react';
import html2canvas from 'html2canvas';

const WhatsAppIcon = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

const ArticleShare = ({ title, elementRef }) => {
    const [copied, setCopied] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    const url = window.location.href;
    const shareText = `Read "${title}" at SahityaSanskritiHub`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch (err) {
            console.error('Failed to copy', err);
        }
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Sahitya Sanskriti Hub',
                    text: shareText,
                    url: url,
                });
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error('Error sharing', err);
                }
            }
        } else {
            handleCopy();
        }
    };

    const handleGenerateGraphic = async () => {
        if (!elementRef.current || isGenerating) return;
        setIsGenerating(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 100));

            const canvas = await html2canvas(elementRef.current, {
                scale: 1, // High res since element is artificially large (1080x1080)
                useCORS: true,
                logging: false,
                backgroundColor: '#FDFBF7' // Updated light study theme
            });

            canvas.toBlob(async (blob) => {
                if (!blob) throw new Error('Blob creation failed');

                const file = new File([blob], `${title.replace(/\\s+/g, '_')}_Article.png`, { type: 'image/png' });
                
                // Detect mobile vs desktop loosely. Windows desktop native sharing of files is very spotty.
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

                if (isMobile && navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                    try {
                        const shareData = {
                            title: `Read "${title}"`,
                            text: shareText,
                            files: [file],
                            url: url
                        };
                        await navigator.share(shareData);
                    } catch (err) {
                        if (err.name !== 'AbortError') downloadFallback(canvas);
                    }
                } else {
                    // Force download on Desktop bypassing OS intent bugs
                    downloadFallback(canvas);
                }
                setIsGenerating(false);
            }, 'image/png');

        } catch (error) {
            console.error('Image capture failed:', error);
            setIsGenerating(false);
        }
    };

    const downloadFallback = (canvas) => {
        const link = document.createElement('a');
        link.download = `${title.replace(/\\s+/g, '_')}_Article.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    const shareLinks = {
        whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`,
    };

    const IconButton = ({ icon: Icon, onClick, href, color, label }) => {
        const buttonStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: `1px solid rgba(0,0,0,0.08)`,
            color: color || 'var(--text-charcoal)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        };

        const handleMouseOver = (e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            e.currentTarget.style.borderColor = color || 'var(--accent-gold)';
            e.currentTarget.style.color = color || 'var(--accent-gold)';
        };

        const handleMouseOut = (e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
            e.currentTarget.style.borderColor = `rgba(0,0,0,0.08)`;
            e.currentTarget.style.color = color || 'var(--text-charcoal)';
        };

        if (href) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={buttonStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    title={`Share on ${label}`}
                    aria-label={`Share on ${label}`}
                >
                    <Icon size={18} />
                </a>
            );
        }

        return (
            <button
                onClick={onClick}
                style={buttonStyle}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                title={label}
                aria-label={label}
            >
                <Icon size={18} />
            </button>
        );
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '24px',
            backgroundColor: 'rgba(212, 175, 55, 0.03)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            borderRadius: '16px',
            margin: '32px 0'
        }}>

            {/* Visual Generator Button - The "Out of the box" feature */}
            <button
                onClick={handleGenerateGraphic}
                disabled={isGenerating}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    width: '100%',
                    padding: '16px',
                    backgroundColor: '#1A1A1A',
                    color: '#D4AF37',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 600,
                    cursor: isGenerating ? 'wait' : 'pointer',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s ease',
                    opacity: isGenerating ? 0.8 : 1
                }}
                onMouseOver={(e) => {
                    if (!isGenerating) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.2)';
                    }
                }}
                onMouseOut={(e) => {
                    if (!isGenerating) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                    }
                }}
            >
                <ImageIcon size={24} />
                {isGenerating ? 'Generating High-Res Image...' : 'Share Beautiful Story Card'}
            </button>

            {/* Standard Options */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginTop: '8px' }}>
                <span style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    whiteSpace: 'nowrap'
                }}>
                    Quick Share
                </span>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {navigator.share && (
                        <IconButton
                            icon={Share2}
                            onClick={handleNativeShare}
                            label="Share via device"
                            color="var(--primary-maroon)"
                        />
                    )}
                    <IconButton href={shareLinks.whatsapp} icon={WhatsAppIcon} color="#25D366" label="WhatsApp" />
                    <IconButton href={shareLinks.facebook} icon={Facebook} color="#1877F2" label="Facebook" />
                    <IconButton href={shareLinks.twitter} icon={Twitter} color="#1DA1F2" label="X" />

                    <button
                        onClick={handleCopy}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '0 16px',
                            height: '40px',
                            borderRadius: '20px',
                            backgroundColor: copied ? '#E8F5E9' : '#ffffff',
                            border: `1px solid ${copied ? '#4CAF50' : 'rgba(0,0,0,0.08)'}`,
                            color: copied ? '#2E7D32' : 'var(--text-charcoal)',
                            fontSize: '13px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                        {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArticleShare;
