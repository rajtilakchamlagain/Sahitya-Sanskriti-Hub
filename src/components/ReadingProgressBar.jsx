import React, { useEffect, useState } from 'react';

const ReadingProgressBar = () => {
    const [progress, setProgress] = useState(0);

    const handleScroll = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = `${totalScroll / windowHeight}`;

        setProgress(Number(scrolled));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: `${progress * 100}%`,
            height: '4px',
            backgroundColor: 'var(--primary-maroon)',
            zIndex: 9999,
            transition: 'width 0.1s ease-out'
        }} />
    );
};

export default ReadingProgressBar;
