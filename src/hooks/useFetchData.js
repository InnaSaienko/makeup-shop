import { useState, useEffect } from "react";

const useFetchData = (Path, filters = {}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let url = new URL(process.env.REACT_APP_MAKEUP_API_URL);
    url.pathname = `${url.pathname}/${Path}`
    url.search = new URLSearchParams(filters).toString();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    setError("Failed to fetch data"); // Handle the error directly
                    return; // Exit early, no need to throw
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url.toString()]);

    return { data, loading, error };
};

export default useFetchData;
