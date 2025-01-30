import { useState, useEffect } from "react";

const useFetchData = (filters = {}) => {
    console.log("Filters for fetch: ", filters )
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = "http://makeup-api.herokuapp.com/api/v1/products.json"

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const queryString = new URLSearchParams(filters).toString();
                const response = await fetch(`${url}?${queryString}`);
                
                if (!response.ok) throw new Error("Failed to fetch data");
                
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [JSON.stringify(filters)]); // Re-fetch if filters changed

    return { data, loading, error };
};

export default useFetchData;
