import React, { useState } from 'react';
import { Globe, Check, X } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../utils/translationService';

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(localStorage.getItem('app_language') || 'en');
    const [searchTerm, setSearchTerm] = useState('');

    const handleLanguageChange = (langCode) => {
        setCurrentLang(langCode);
        localStorage.setItem('app_language', langCode);
        setIsOpen(false);
        // Reload to apply changes (simplest way to reset app state for translation)
        window.location.reload();
    };

    const filteredLangs = SUPPORTED_LANGUAGES.filter(l =>
        l.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="btn-secondary"
                style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '8px 12px' }}
                aria-label="Change Language"
            >
                <Globe size={18} />
                <span className="hidden-mobile">{SUPPORTED_LANGUAGES.find(l => l.code === currentLang)?.name || 'Language'}</span>
            </button>

            {isOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div className="content-paper" style={{
                        width: '90%',
                        maxWidth: '400px',
                        maxHeight: '80vh',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '0'
                    }}>
                        {/* Header */}
                        <div style={{
                            padding: '16px',
                            borderBottom: '1px solid #eee',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <h3 style={{ margin: 0, fontFamily: 'var(--font-heading)' }}>Select Language</h3>
                            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                <X size={24} />
                            </button>
                        </div>

                        {/* Search */}
                        <div style={{ padding: '16px 16px 0 16px' }}>
                            <input
                                type="text"
                                placeholder="Search language..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    border: '1px solid #ddd',
                                    fontFamily: 'var(--font-body)'
                                }}
                            />
                        </div>

                        {/* List */}
                        <div style={{ overflowY: 'auto', padding: '16px' }}>
                            {filteredLangs.map(lang => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    style={{
                                        width: '100%',
                                        textAlign: 'left',
                                        padding: '12px',
                                        background: currentLang === lang.code ? 'rgba(139, 0, 0, 0.05)' : 'white',
                                        border: 'none',
                                        borderBottom: '1px solid #f9f9f9',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        color: currentLang === lang.code ? 'var(--primary-maroon)' : 'var(--text-main)',
                                        fontWeight: currentLang === lang.code ? 600 : 400
                                    }}
                                >
                                    {lang.name}
                                    {currentLang === lang.code && <Check size={16} />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LanguageSwitcher;
