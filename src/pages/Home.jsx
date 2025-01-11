import React, { useState, useEffect } from "react";
import CarouselBanner from "../components/CarouselBanner/CarouselBanner";
import CarouselBanner2 from "../components/CarouselBanner2/CarouselBanner2";
import { Preloader } from "../components/Preloader/Preloader"

function Home() {
  const [data, setData] = useState([]);
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  // const API_KEY = '';
  // const BASE_URL = 'https://sandbox.api.video/videos'
  const topFive = data.slice(0, 5);
  const hit20 = data.slice(5, 21);


  useEffect(() => {
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.99`)
      .then((response) => response.json())
      .then((data) => { setData(data); setLoading(false) });

    // fetch(BASE_URL, {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Bearer ${API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     { setVideo(data);  setLoading(false) } })
    //   .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <main className="content">
      <div className="main">
        {loading ? (
          <Preloader />
        ) : (<>
          <CarouselBanner data={topFive} />
          <CarouselBanner2 data={hit20} />
        </>
        )}
      </div>
    </main>
  );
}
export { Home };
