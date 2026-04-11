import { TrendingUp, Users, BookOpen, Feather } from 'lucide-react';

const StatsWidget = () => {
    return (
        <div className="glass-card" style={{
            padding: '24px',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'rgba(255, 255, 255, 0.4)' // Slightly distinct from Kaal Chakra
        }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(180, 83, 9, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TrendingUp size={18} color="var(--accent-gold)" />
                </div>
                <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    color: 'var(--text-main)',
                    lineHeight: '1.2'
                }}>
                    Live Report
                </h3>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                {/* Stat Item 1 */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Feather size={16} color="var(--primary-maroon)" style={{ opacity: 0.7 }} />
                        <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Compositions</span>
                    </div>
                    <span style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        fontFamily: 'var(--font-heading)'
                    }}>150+</span>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.05)', width: '100%' }}></div>

                {/* Stat Item 2 */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <BookOpen size={16} color="var(--primary-maroon)" style={{ opacity: 0.7 }} />
                        <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Cultural Insights</span>
                    </div>
                    <span style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        fontFamily: 'var(--font-heading)'
                    }}>54</span>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.05)', width: '100%' }}></div>

                {/* Stat Item 3 */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Users size={16} color="var(--primary-maroon)" style={{ opacity: 0.7 }} />
                        <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Community</span>
                    </div>
                    <span style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        fontFamily: 'var(--font-heading)'
                    }}>12.5k</span>
                </div>

            </div>

            {/* Live Indicator */}
            <div style={{
                marginTop: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11px',
                color: 'var(--accent-gold)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>
                <span style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--accent-gold)',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px var(--accent-gold)'
                }}></span>
                System Active
            </div>
        </div>
    );
};

export default StatsWidget;
