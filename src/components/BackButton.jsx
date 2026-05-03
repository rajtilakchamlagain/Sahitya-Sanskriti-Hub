import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button 
            onClick={() => navigate(-1)}
            aria-label="Go back"
            style={{
                position: 'fixed',
                top: '90px', // Just below the header
                left: '20px',
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(15, 15, 15, 0.6)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: '#D4AF37',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(15, 15, 15, 0.6)';
                e.currentTarget.style.transform = 'scale(1)';
            }}
        >
            <ArrowLeft size={24} />
        </button>
    );
};

export default BackButton;
