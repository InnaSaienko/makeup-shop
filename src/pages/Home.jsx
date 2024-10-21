import React, { useState, useEffect } from "react";
import CarouselBanner from "../components/CarouselBanner/CarouselBanner";
import { Preloader } from "../components/Preloader/Preloader"

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.99`)
    .then((response) => response.json())
    .then((data) => {setData(data); setLoading(false)});
  }, []);
  const topFive = data.slice(0, 5);

  return (
    <main className="container content">
      <div className="main">
      {loading ? (
        <Preloader />
      ) : (<CarouselBanner data={topFive} />)}
      </div>
    </main>
  );
}
export { Home };
