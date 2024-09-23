import { useState, useEffect } from "react";

const FetchData = (endPoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopProd = async () => {
      try {
        const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json${endPoint}`);
        const result = await response.json();

        if (result.length > 0) {
          // const topFive = result.slice(0, 5);
          setData(result);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchTopProd();
  }, [endPoint]);

  return { data, loading };
};

export default FetchData;
