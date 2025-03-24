import {useState, useEffect} from "react";

interface UseFetchDataReturn<T> {
    data: T[];
    loading: boolean;
    error: string | null;
}

const useFetchData = <T>(Path: string, filters: Record<string, string> = {}): UseFetchDataReturn<T> => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    if (!process.env.REACT_APP_MAKEUP_API_URL) {
        setError("Failed to read REACT_APP_MAKEUP_API_URL");
        return {data: [], loading: false, error: "Failed to read REACT_APP_MAKEUP_API_URL"};
    }

    let url = new URL(process.env.REACT_APP_MAKEUP_API_URL);
    url.pathname = `${url.pathname}/${Path}`
    url.search = new URLSearchParams(filters).toString();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    setError("Failed to fetch data");
                    return;
                }

                const result: T[] = await response.json();
                setData(result);
            } catch (err: Error | any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url.toString()]);

    return {data, loading, error};
};

export default useFetchData;
