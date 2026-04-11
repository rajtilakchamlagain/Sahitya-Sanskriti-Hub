import React from 'react';
import { Info, CheckCircle } from 'lucide-react';

const SummaryBox = ({ title, definition, takeaway }) => {
    return (
        <div className="summary-box animate-fade-in">
            <div className="summary-header">
                <Info size={20} className="summary-icon" />
                <h3 className="summary-title">{title}</h3>
            </div>

            <div className="summary-content">
                <p className="summary-definition">
                    <strong>Definition:</strong> {definition}
                </p>

                <div className="summary-takeaway">
                    <CheckCircle size={16} className="takeaway-icon" />
                    <span className="takeaway-text"><strong>Key Takeaway:</strong> {takeaway}</span>
                </div>
            </div>

            <style>{`
                .summary-box {
                    background: var(--bg-surface);
                    border: 1px solid rgba(180, 83, 9, 0.2);
                    border-left: 4px solid var(--accent-gold);
                    border-radius: 12px;
                    padding: 20px;
                    margin-bottom: 32px;
                    box-shadow: var(--shadow-sm);
                }
                .summary-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 12px;
                }
                .summary-icon {
                    color: var(--accent-gold);
                }
                .summary-title {
                    font-family: var(--font-heading);
                    font-size: 18px;
                    color: var(--primary-maroon);
                    margin: 0;
                }
                .summary-content {
                    font-size: 16px;
                    color: var(--text-main);
                    line-height: 1.6;
                }
                .summary-definition {
                    margin-bottom: 12px;
                }
                .summary-takeaway {
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    background: rgba(180, 83, 9, 0.05);
                    padding: 12px;
                    border-radius: 8px;
                    font-size: 15px;
                }
                .takeaway-icon {
                    color: var(--primary-maroon);
                    margin-top: 3px;
                    flex-shrink: 0;
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default SummaryBox;
