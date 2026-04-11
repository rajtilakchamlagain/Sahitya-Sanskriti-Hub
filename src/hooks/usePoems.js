import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { poems as staticPoems } from '../data/poems';

export const usePoems = () => {
    const [poems, setPoems] = useState(staticPoems);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLikes = async () => {
            try {
                // Fetch all documents from 'poems' collection
                const querySnapshot = await getDocs(collection(db, 'poems'));

                // Create a map of poemId -> likes
                const likeMap = {};
                querySnapshot.forEach((doc) => {
                    likeMap[doc.id] = doc.data().likes || 0;
                });

                // Merge with static data
                const mergedPoems = staticPoems.map(poem => ({
                    ...poem,
                    likes: likeMap[poem.id] || 0
                }));

                // Sort by likes descending
                const sortedPoems = mergedPoems.sort((a, b) => b.likes - a.likes);

                setPoems(sortedPoems);
            } catch (error) {
                console.error("Error fetching likes:", error);
                // Fallback to static poems if fetch fails
                setPoems(staticPoems);
            } finally {
                setLoading(false);
            }
        };

        fetchLikes();
    }, []);

    return { poems, loading };
};
