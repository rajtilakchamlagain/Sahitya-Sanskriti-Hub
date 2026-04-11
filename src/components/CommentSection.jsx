import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { Send, User } from 'lucide-react';

const CommentSection = ({ id, collectionName = 'poems' }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [username, setUsername] = useState('');
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const q = query(
            collection(db, 'comments'),
            where('itemId', '==', String(id)),
            where('collectionName', '==', collectionName),
            orderBy('createdAt', 'desc')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const commentsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setComments(commentsData);
        }, (error) => {
            console.error("Error fetching comments:", error);
        });

        return () => unsubscribe();
    }, [id, collectionName]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newComment.trim() || !username.trim()) return;

        setSubmitting(true);
        try {
            await addDoc(collection(db, 'comments'), {
                itemId: String(id),
                collectionName,
                text: newComment,
                user: username,
                createdAt: serverTimestamp()
            });
            setNewComment('');
        } catch (error) {
            console.error("Error adding comment:", error);
            alert("Failed to post comment. Check your connection.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div style={{ marginTop: '40px', width: '100%', maxWidth: '600px', margin: '40px auto' }}>
            <h3 style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--primary-maroon)',
                fontSize: '20px',
                marginBottom: '20px',
                borderBottom: '2px solid var(--accent-gold)',
                paddingBottom: '8px',
                display: 'inline-block'
            }}>
                Thoughts & Reflections
            </h3>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} style={{ marginBottom: '32px' }}>
                <div style={{ marginBottom: '12px' }}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            backgroundColor: 'var(--bg-paper)',
                            fontFamily: 'var(--font-body)'
                        }}
                    />
                </div>
                <div style={{ position: 'relative' }}>
                    <textarea
                        placeholder="Share your thoughts on this poem..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        required
                        rows={3}
                        style={{
                            width: '100%',
                            padding: '12px',
                            paddingRight: '48px',
                            borderRadius: '12px',
                            border: '1px solid #ddd',
                            backgroundColor: 'var(--bg-paper)',
                            fontFamily: 'var(--font-body)',
                            resize: 'vertical'
                        }}
                    />
                    <button
                        type="submit"
                        disabled={submitting}
                        style={{
                            position: 'absolute',
                            bottom: '12px',
                            right: '12px',
                            background: 'var(--primary-maroon)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '36px',
                            height: '36px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: submitting ? 'wait' : 'pointer',
                            opacity: submitting ? 0.7 : 1
                        }}
                    >
                        <Send size={16} />
                    </button>
                </div>
            </form>

            {/* Comments List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {comments.length === 0 ? (
                    <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', textAlign: 'center', fontSize: '14px' }}>
                        Be the first to share your thoughts.
                    </p>
                ) : (
                    comments.map(comment => (
                        <div key={comment.id} style={{
                            backgroundColor: 'white',
                            padding: '16px',
                            borderRadius: '12px',
                            boxShadow: 'var(--shadow-soft)',
                            border: '1px solid rgba(0,0,0,0.03)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    background: '#f0f0f0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <User size={14} color="#666" />
                                </div>
                                <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-charcoal)' }}>
                                    {comment.user}
                                </span>
                                <span style={{ fontSize: '10px', color: 'var(--text-muted)', marginLeft: 'auto' }}>
                                    {comment.createdAt?.toDate ? new Date(comment.createdAt.toDate()).toLocaleDateString() : 'Just now'}
                                </span>
                            </div>
                            <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.5', whiteSpace: 'pre-wrap' }}>
                                {comment.text}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CommentSection;
