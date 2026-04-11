import { useState, useEffect } from 'react';
import { quotes } from '../data/quotes';
import { RefreshCw, Quote } from 'lucide-react';

const QuoteCard = () => {
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    }, []);

    const handleRefresh = () => {
        setIsAnimating(true);
        setTimeout(() => {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * quotes.length);
            } while (newIndex + 1 === currentQuote.id && quotes.length > 1);

            setCurrentQuote(quotes[newIndex]);
            setIsAnimating(false);
        }, 300);
    };

    return (
        <div style={{
            margin: '0 12px 20px 12px',
            padding: '20px',
            position: 'relative',
            backgroundColor: '#2C2C2C', // RESTORED DARK THEME
            border: '2px solid var(--accent-gold)',
            borderRadius: '16px',
            color: '#F9F7F2'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <Quote size={24} color="var(--accent-gold)" style={{ opacity: 0.8 }} />

                <button
                    onClick={handleRefresh}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px'
                    }}
                >
                    <RefreshCw
                        size={14}
                        color="var(--accent-gold)"
                        style={{
                            transform: isAnimating ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.5s ease',
                            opacity: 0.6
                        }}
                    />
                </button>
            </div>

            <div style={{
                opacity: isAnimating ? 0 : 1,
                transition: 'opacity 0.3s ease',
            }}>
                <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '16px', // Smaller font
                    lineHeight: '1.5',
                    marginBottom: '10px',
                    color: '#F9F7F2', // Light Text on Dark Card
                    fontStyle: 'italic',
                    fontWeight: 500
                }}>
                    "{currentQuote.text}"
                </h4>

                <p style={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.7)', // Light text
                    marginBottom: '12px'
                }}>
                    {currentQuote.translation}
                </p>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <span style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--accent-gold)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        — {currentQuote.author}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default QuoteCard;
