import { Info, Calendar, Heart, Feather, User } from 'lucide-react';
import { useState } from 'react';

const ContentContext = ({ data }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (!data) return null;

    return (
        <div style={{
            margin: '32px 0',
            border: '1px solid rgba(128, 0, 0, 0.1)',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#FFF8F0' // Very light parchment
        }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'rgba(128, 0, 0, 0.03)',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--primary-maroon)',
                    fontFamily: 'var(--font-heading)'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Info size={20} />
                    <span style={{ fontSize: '16px', fontWeight: 600 }}>About this Piece</span>
                </div>
                <span style={{ fontSize: '20px', transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    ▼
                </span>
            </button>

            {isOpen && (
                <div style={{ padding: '20px', display: 'grid', gap: '20px' }}>

                    {/* Who & When */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', opacity: 0.7 }}>
                                <User size={14} />
                                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Written By</span>
                            </div>
                            <p style={{ margin: 0, fontSize: '15px', color: 'var(--text-charcoal)', fontWeight: 500 }}>{data.writtenBy}</p>
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', opacity: 0.7 }}>
                                <Calendar size={14} />
                                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Context/Time</span>
                            </div>
                            <p style={{ margin: 0, fontSize: '15px', color: 'var(--text-charcoal)' }}>{data.writtenWhen}</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.05)' }}></div>

                    {/* Emotion & Why */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', opacity: 0.7 }}>
                            <Heart size={14} />
                            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>The Emotion</span>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {data.emotion.split(',').map((emo, i) => (
                                <span key={i} style={{
                                    backgroundColor: 'rgba(212, 175, 55, 0.15)',
                                    color: '#8a6d1c',
                                    padding: '4px 10px',
                                    borderRadius: '20px',
                                    fontSize: '13px',
                                    fontWeight: 500
                                }}>
                                    {emo.trim()}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', opacity: 0.7 }}>
                            <Feather size={14} />
                            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Why I Wrote This</span>
                        </div>
                        <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6', color: 'var(--text-charcoal)', fontStyle: 'italic' }}>
                            "{data.why}"
                        </p>
                    </div>

                    {/* Takeaway - Highlight Box */}
                    <div style={{
                        backgroundColor: 'white',
                        padding: '16px',
                        borderRadius: '12px',
                        borderLeft: '4px solid var(--primary-maroon)',
                        boxShadow: 'var(--shadow-soft)'
                    }}>
                        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#444' }}>
                            <strong>Reader's Takeaway:</strong> {data.takeaway}
                        </p>
                    </div>

                </div>
            )}
        </div>
    );
};

export default ContentContext;
