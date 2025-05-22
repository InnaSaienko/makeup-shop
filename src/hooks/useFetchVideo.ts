import {useState, useEffect} from 'react';

interface Video {
    src: string,
    title: string
}

interface VideoReturn {
    videos: Video[];
    loading: boolean;
}
declare var require: Require;

const useVideos = (): VideoReturn => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadVideos = async () => {
            const context = require.context('../assets/videos', false, /\.(mp4|webm)$/);
            const videoList: Video[] = context.keys().map((key: string) => ({
                src: context(key),
                title: key.replace('./', '').replace(/\.(mp4|webm)$/, ''),
            }));

            setVideos(videoList);
            setLoading(false);
        };

        loadVideos();
    }, []);

    return {videos, loading};
};

export default useVideos;
