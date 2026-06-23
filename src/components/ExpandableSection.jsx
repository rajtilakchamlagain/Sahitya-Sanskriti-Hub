import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ExpandableSection = ({ title, icon: Icon, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            marginBottom: '40px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px 30px',
                    backgroundColor: isOpen ? 'rgba(212, 175, 55, 0.05)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {Icon && <Icon size={28} color="#D4AF37" />}
                    <h2 style={{ 
                        fontFamily: 'var(--font-heading)', 
                        fontSize: 'clamp(24px, 4vw, 32px)', 
                        color: '#D4AF37', 
                        margin: 0 
                    }}>
                        {title}
                    </h2>
                </div>
                <div style={{ 
                    padding: '8px', 
                    backgroundColor: 'rgba(255,255,255,0.05)', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                    <ChevronDown size={24} color="#D4AF37" />
                </div>
            </button>
            
            <div style={{
                maxHeight: isOpen ? '5000px' : '0',
                opacity: isOpen ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                overflow: 'hidden'
            }}>
                <div style={{ padding: '0 30px 30px 30px' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ExpandableSection;
