import { Play, ExternalLink } from 'lucide-react';

const VideoRow = () => {
    const videos = [
        { id: 'DdIsAiiqddw', title: 'Ranga Mancha (Original Song) - Dr. Tilak Sarmah' },
        { id: '3dyq84aBYmI', title: 'Devi Vandana - Pranamo Janani' },
        { id: 'c7bSXZ_qaxA', title: 'Mahabir Prasad Madhup - Hum Bharat Ke Shreshth Nagarik' },
        { id: 'vx_k76Z9XeU', title: 'Haribhakta Katuwal Part-2: Biography & Poem' },
        { id: 'DCsjggekkrg', title: 'Gopal Singh Nepali: Biography & Hindi Poem' },
        { id: 'YXp_EJ75Yeg', title: 'GORKHALI Song by ChakraPani Sharma' }
    ];

    const openYouTube = (videoId) => {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    };

    return (
        <section style={{ marginBottom: '24px' }}>
            <div className="hide-scrollbar" style={{
                display: 'flex',
                gap: '16px',
                overflowX: 'auto',
                padding: '4px 4px 20px 4px', // Space for shadow
                width: '100%',
                scrollSnapType: 'x mandatory'
            }}>
                {videos.map((video, index) => (
                    <div key={video.id} style={{
                        minWidth: '280px', // Wider for video
                        position: 'relative',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        backgroundColor: 'white',
                        boxShadow: 'var(--shadow-soft)',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                        {/* Video Embed */}
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            paddingTop: '56.25%', // 16:9 Aspect Ratio
                            backgroundColor: '#000'
                        }}>
                            <iframe
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    border: 'none'
                                }}
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Content & Action */}
                        <div style={{ padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h4 style={{
                                fontSize: '14px',
                                color: 'var(--text-charcoal)',
                                fontFamily: 'var(--font-heading)',
                                margin: 0
                            }}>
                                {video.title}
                            </h4>

                            <button
                                onClick={() => openYouTube(video.id)}
                                style={{
                                    background: '#f0f0f0',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#ff0000' // YouTube Red
                                }}
                                title="Watch on YouTube App"
                            >
                                <ExternalLink size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VideoRow;
