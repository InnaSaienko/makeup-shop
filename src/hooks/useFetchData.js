import { useState, useEffect } from "react";

const useFetchData = (filters = {}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const queryString = new URLSearchParams(filters).toString();
                const finalUrl = queryString ? `${url}?${queryString}` : url;
                const response = await fetch(finalUrl);

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
    }, [url, filters]); // Re-fetch if filters changed

    return { data, loading, error };
};

export default useFetchData;
