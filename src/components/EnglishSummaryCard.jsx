import React from 'react';
import { Sparkles } from 'lucide-react';
import './EnglishSummaryCard.css'; // Let's create an accompanying css file

const EnglishSummaryCard = ({ text }) => {
    if (!text) return null;
    
    return (
        <div className="english-summary-card glass-panel" aria-label="English Summary">
            <div className="english-summary-header">
                <Sparkles className="english-summary-icon" size={20} />
                <h3>English Overview</h3>
            </div>
            <p className="english-summary-text">{text}</p>
        </div>
    );
};

export default EnglishSummaryCard;
