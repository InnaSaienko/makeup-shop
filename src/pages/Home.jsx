import React from "react";
import { useProductContext } from "../context/ProductContext/ProductContext";
import SliderVideo from "../components/SliderVideo/SliderVideo"
import SliderTopFive from "../components/SliderTopFive/SliderTopFive";
import SliderTopNext from "../components/SliderTopNext/SliderTopNext";
import { Preloader } from "../components/Preloader/Preloader";

function Home() {
  const { videos, topFive, hit20, loading, isDownloaded } = useProductContext();

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
            <SliderVideo data={videos}/>
            <SliderTopFive data={topFive} />
            <SliderTopNext data={hit20} />
          </>
        )}
      </div>
    </main>
  );
}

export { Home };
