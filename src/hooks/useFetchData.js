import { useState, useEffect } from "react";

const useFetchData = (path, filters = {}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let url = new URL(process.env.REACT_APP_MAKEUP_API_URL);
    url.pathname = `${url.pathname}/${path}`
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
    }, [url.toString()]); // Re-fetch if filters changed

    return { data, loading, error };
};

//http://cicada-1:5272/api/v1/
export default useFetchData;
