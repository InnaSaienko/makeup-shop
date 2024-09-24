import { useState, useEffect } from "react";

const FetchData = (endPoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function asyncFetchData() {      
      setLoading(true);
      await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json${endPoint}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Fetching makeup-api data failed: ", error);
          setLoading(false);
        });
    }
    asyncFetchData();
  }, [endPoint]);

  return { data, loading };
};

export default FetchData;
