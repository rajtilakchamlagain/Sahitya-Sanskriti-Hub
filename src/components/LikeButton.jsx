import { useState, useEffect } from 'react';
import { db } from '../firebase'; // Ensure this points to your config
import { doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore';
import { Heart } from 'lucide-react';

const LikeButton = ({ id, collectionName = 'poems' }) => {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [loading, setLoading] = useState(true);

    // Safety Measure: If ID is missing, don't render a broken button
    if (!id) {
        console.error("LikeButton: 'id' prop is missing or invalid.", { id, collectionName });
        return null;
    }

    const docRef = doc(db, collectionName, String(id));
    const localStorageKey = `liked_${collectionName}_${id}`;

    useEffect(() => {
        // Check local storage
        const isLiked = localStorage.getItem(localStorageKey);
        if (isLiked) setLiked(true);

        const fetchLikes = async () => {
            try {
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setLikes(docSnap.data().likes || 0);
                } else {
                    // Initialize if missing
                    await setDoc(docRef, { likes: 0 }, { merge: true });
                }
            } catch (error) {
                console.error("Error fetching likes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLikes();
    }, [id, collectionName]);

    const handleLike = async () => {
        if (liked) return; // Prevent double likes

        // Optimistic UI update
        setLiked(true);
        setLikes(prev => prev + 1);
        localStorage.setItem(localStorageKey, 'true');

        try {
            await setDoc(docRef, {
                likes: increment(1)
            }, { merge: true });
        } catch (error) {
            console.error("Error updating likes:", error);
            // Revert on failure
            setLiked(false);
            setLikes(prev => prev - 1);
            localStorage.removeItem(localStorageKey);
        }
    };

    return (
        <button
            onClick={handleLike}
            disabled={liked || loading}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '30px',
                background: liked ? 'var(--primary-maroon)' : '#f0f0f0',
                color: liked ? 'white' : 'var(--text-charcoal)',
                cursor: liked ? 'default' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: 'var(--shadow-soft)'
            }}
        >
            <Heart size={20} fill={liked ? "white" : "none"} strokeWidth={2} />
            <span style={{ fontWeight: 600, fontSize: '14px' }}>
                {likes} {likes === 1 ? 'Like' : 'Likes'}
            </span>
        </button>
    );
};

export default LikeButton;
