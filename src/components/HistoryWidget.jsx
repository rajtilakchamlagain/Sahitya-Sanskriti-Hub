import { useState, useEffect } from 'react';
import { Loader, Scroll, Feather } from 'lucide-react';

const historyFacts = [
    {
        title: "The Gorkha Valor",
        text: "The Gorkhas are renowned for their bravery. 'Kafar Hunu Bhanda Marnu Ramro' (Better to die than live like a coward) is their motto.",
        category: "Heritage"
    },
    {
        title: "Maha Shivratri",
        text: "Celebrating the cosmic union of Shiva and Shakti. It represents the overcoming of darkness and ignorance.",
        category: "Sanatan Dharma"
    },
    {
        title: "The Vedas",
        text: "The oldest scriptures of Hinduism, the Vedas are a vast body of knowledge texts originating in the ancient Indian subcontinent.",
        category: "Scriptures"
    },
    {
        title: "Nepali Language",
        text: "Originally known as Khas Kura, the Nepali language has a rich literary tradition dating back to the 12th century.",
        category: "Language"
    },
    {
        title: "Indian Independence",
        text: "Countless freedom fighters from the Northeast and Gorkha community sacrificed their lives for India's freedom.",
        category: "History"
    },
    {
        title: "The Bhagavad Gita",
        text: "A 700-verse Hindu scripture that is part of the epic Mahabharata, providing spiritual guidance on duty and righteousness.",
        category: "Philosophy"
    }
];

const HistoryWidget = () => {
    const [currentFact, setCurrentFact] = useState(historyFacts[0]);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentFact(prev => {
                    const currentIndex = historyFacts.indexOf(prev);
                    const nextIndex = (currentIndex + 1) % historyFacts.length;
                    return historyFacts[nextIndex];
                });
                setFade(false);
            }, 500); // Wait for fade out
        }, 8000); // Change every 8 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass-card" style={{
            padding: '16px', // Reduced padding
            marginBottom: '20px',
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid rgba(180, 83, 9, 0.4)',
            backgroundColor: 'rgba(255, 251, 245, 0.6)'
        }}>
            {/* Header: The Kaal Chakra */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', borderBottom: '1px solid rgba(180, 83, 9, 0.2)', paddingBottom: '12px' }}>
                <div style={{
                    position: 'relative',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* The Spinning Chakra */}
                    <Loader
                        size={24} // Smaller Icon
                        color="var(--accent-gold)"
                        style={{
                            animation: 'spin-slow 6s linear infinite'
                        }}
                    />
                    {/* Center Dot */}
                    <div style={{
                        position: 'absolute',
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'var(--primary-maroon)',
                        borderRadius: '50%'
                    }} />
                </div>

                <div>
                    <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '18px',
                        color: 'var(--primary-maroon)',
                        lineHeight: '1.2'
                    }}>
                        The Kaal Chakra
                    </h3>
                    <span style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px' }}>
                        Archives of Heritage
                    </span>
                </div>
            </div>

            {/* Fact Content */}
            <div style={{
                opacity: fade ? 0 : 1,
                transition: 'opacity 0.5s ease',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{
                    display: 'inline-block',
                    padding: '4px 8px',
                    backgroundColor: 'rgba(180, 83, 9, 0.1)',
                    borderRadius: '4px',
                    fontSize: '10px',
                    color: 'var(--accent-gold)',
                    fontWeight: 700,
                    marginBottom: '8px',
                    width: 'fit-content'
                }}>
                    {currentFact.category}
                </div>

                <h4 style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: 'var(--text-main)',
                    fontFamily: 'var(--font-heading)'
                }}>
                    {currentFact.title}
                </h4>

                <p style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                    fontStyle: 'italic'
                }}>
                    "{currentFact.text}"
                </p>
            </div>

            {/* Decorative Background Icon */}
            <Scroll
                size={100}
                color="var(--primary-maroon)"
                style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    opacity: 0.05,
                    transform: 'rotate(-15deg)'
                }}
            />
        </div>
    );
};

export default HistoryWidget;
