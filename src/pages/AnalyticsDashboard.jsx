import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { BarChart, Activity, Globe, Users } from 'lucide-react';

const AnalyticsDashboard = () => {
    // Mock Data (Since we don't have a backend DB for this demo)
    // In a real app, this would fetch from Vercel Analytics or Firebase
    const [stats, setStats] = useState({
        totalViews: 12453,
        bounceRate: 42.5,
        activeUsers: 14,
        topPages: [
            { path: '/nepali-sahitya', views: 4500, change: '+12%' },
            { path: '/nepali-kavita', views: 3200, change: '+8%' },
            { path: '/', views: 2800, change: '+5%' },
            { path: '/author/dr-tilak-sarmah', views: 1200, change: '+25%' },
        ]
    });

    return (
        <div className="content-paper" style={{ padding: '40px', maxWidth: '1000px', margin: '40px auto' }}>
            <SEO title="Analytics Dashboard | Private" description="Private statistics" />

            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-maroon)', margin: 0 }}>Analytics Dashboard</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Real-time performance overview</p>
                </div>
                <div className="btn-secondary">
                    Live Mode <span style={{ width: 8, height: 8, background: '#10b981', borderRadius: '50%' }}></span>
                </div>
            </header>

            {/* Key Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                <div className="stat-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <h3 className="stat-label">Total Views</h3>
                        <Globe size={20} color="var(--accent-gold)" />
                    </div>
                    <p className="stat-value">{stats.totalViews.toLocaleString()}</p>
                    <span className="stat-trend trend-up">+12.5% this month</span>
                </div>

                <div className="stat-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <h3 className="stat-label">Bounce Rate</h3>
                        <Activity size={20} color="var(--primary-maroon)" />
                    </div>
                    <p className="stat-value">{stats.bounceRate}%</p>
                    <span className="stat-trend trend-down">-2.1% improvement</span>
                </div>

                <div className="stat-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <h3 className="stat-label">Active Users</h3>
                        <Users size={20} color="#10b981" />
                    </div>
                    <p className="stat-value">{stats.activeUsers}</p>
                    <span className="stat-trend">Right now</span>
                </div>
            </div>

            {/* Top Pages Table */}
            <div className="dashboard-section">
                <h2 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', marginBottom: '24px', color: 'var(--primary-maroon)' }}>Top Performing Pages</h2>
                <div className="table-container">
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid #eee', textAlign: 'left' }}>
                                <th style={{ padding: '16px', color: 'var(--text-muted)' }}>Page Path</th>
                                <th style={{ padding: '16px', color: 'var(--text-muted)' }}>Views</th>
                                <th style={{ padding: '16px', color: 'var(--text-muted)' }}>Trend</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stats.topPages.map((page, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid #f5f5f5' }}>
                                    <td style={{ padding: '16px', fontWeight: 500 }}>{page.path}</td>
                                    <td style={{ padding: '16px' }}>{page.views.toLocaleString()}</td>
                                    <td style={{ padding: '16px', color: '#10b981', fontWeight: 600 }}>{page.change}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <style>{`
                .stat-card {
                    background: white;
                    padding: 24px;
                    border-radius: 16px;
                    box-shadow: var(--shadow-sm);
                    border: 1px solid rgba(0,0,0,0.05);
                }
                .stat-label {
                    font-size: 14px;
                    color: var(--text-muted);
                    font-weight: 500;
                    margin: 0;
                }
                .stat-value {
                    font-size: 32px;
                    font-weight: 700;
                    color: var(--text-main);
                    margin: 8px 0;
                    font-family: var(--font-heading);
                }
                .stat-trend {
                    font-size: 12px;
                    font-weight: 600;
                }
                .trend-up { color: #10b981; }
                .trend-down { color: #10b981; } /* Good for bounce rate */
                
                .dashboard-section {
                    background: white;
                    padding: 24px;
                    border-radius: 16px;
                    box-shadow: var(--shadow-sm);
                    border: 1px solid rgba(0,0,0,0.05);
                }
            `}</style>
        </div>
    );
};

export default AnalyticsDashboard;
