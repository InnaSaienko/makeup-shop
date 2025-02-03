import { useState, useEffect } from 'react';

const useVideos = () => {
    const [videos, setVideos] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadVideos = async () => {
            const context = require.context('../assets/videos', false, /\.(mp4|webm)$/);
            const videoList = context.keys().map((key) => ({
                src: context(key),
                title: key.replace('./', '').replace(/\.(mp4|webm)$/, ''),
            }));

            setVideos(videoList);
            setLoading(false);
        };

        loadVideos();
    }, []);

    return { videos, loading };
};

export default useVideos;
