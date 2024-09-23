import React from "react";
import CarouselBanner from "../components/CarouselBanner/CarouselBanner";
import FetchData from "../components/ApiServices/ApiServices";

function Home() {
  const { data, loading } = FetchData("?rating_greater_than=4.99");

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container content">
      <div className="main">
        <CarouselBanner data={data} />
      </div>
    </main>
  );
}
export { Home };
