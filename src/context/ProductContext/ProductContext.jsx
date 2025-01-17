import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext({});

export function useProductContext() {
  return useContext(ProductContext);
}
const importVideos = () => {
  const context = require.context('../../assets/videos', false, /\.(mp4|webm)$/);
  return context.keys().map((key) => ({
      src: context(key),
      title: key.replace('./', '').replace(/\.(mp4|webm)$/, ''),
  }));
};

export function ProductProvider({ children }) {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  const topFive = data.slice(0, 5);
  const hit20 = data.slice(5, 21);

  useEffect(() => {
    setVideos(importVideos());
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.99`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setIsDownloaded(true);
        console.log("Videos loaded:", importVideos());
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        videos,
        topFive,
        hit20,
        loading,
        isDownloaded,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
