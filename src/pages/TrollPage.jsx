import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

export default function TrollPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      color: 'var(--text-main)',
      fontFamily: 'var(--font-heading)'
    }}>
      <Helmet>
        <title>Access Denied 👎</title>
      </Helmet>

      <div style={{
        background: 'var(--bg-glass-heavy)',
        padding: '50px 30px',
        borderRadius: '24px',
        border: '2px solid rgba(255, 0, 0, 0.2)',
        boxShadow: '0 20px 50px rgba(255, 0, 0, 0.1)',
        maxWidth: '600px',
        width: '100%',
        animation: 'shake 0.5s ease-in-out'
      }}>
        <div style={{ fontSize: '100px', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          👎
        </div>
        
        <h1 style={{ color: '#e74c3c', fontSize: '32px', marginBottom: '16px' }}>
          Bro, this doesn't belong to you!
        </h1>
        
        <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.6' }}>
          Nice try sneaking into the Admin section, but you don't have the magic powers. 
          Go read a poem instead! 🙄
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px'
        }}>
          <button 
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 24px',
              background: 'var(--primary-maroon)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowLeft size={18} />
            Back to Safety
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
      `}</style>
    </div>
  );
}
