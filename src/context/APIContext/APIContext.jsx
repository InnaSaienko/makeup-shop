import { createContext, useContext, useState, useEffect } from "react";

const APIContext = createContext({});

export function useAPIContext() {
  return useContext(APIContext);
}

export function APIProvider({ children }) {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const topFive = data.slice(0, 5);
  const hit20 = data.slice(5, 21);

  useEffect(() => {
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.99`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setIsDownloaded(true);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <APIContext.Provider
      value={{
        topFive,
        hit20,
        loading,
        isDownloaded,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}
