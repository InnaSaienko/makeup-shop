import React from "react";
import { useAPIContext } from "../context/APIContext/APIContext";
import VideoSlider from "../components/VideoSlider/SwiperSlide"
import CarouselBanner from "../components/CarouselBanner/CarouselBanner";
import CarouselBanner2 from "../components/CarouselBanner2/CarouselBanner2";
import { Preloader } from "../components/Preloader/Preloader";

function Home() {
  const { videos, topFive, hit20, loading, isDownloaded } = useAPIContext();

  if (!isDownloaded) {
    return <Preloader />;
  }

  return (
    <main className="content">
      <div className="main">
        {loading ? (
          <Preloader />
        ) : (
          <>
            <VideoSlider data={videos}/>
            <CarouselBanner data={topFive} />
            <CarouselBanner2 data={hit20} />
          </>
        )}
      </div>
    </main>
  );
}

export { Home };
