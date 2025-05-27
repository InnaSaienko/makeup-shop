import React, {JSX} from 'react';
import useVideos from "../../hooks/useFetchVideo";
import {Preloader} from "../Preloader/Preloader";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./SliderVideo.scss";
import {Navigation, Pagination} from 'swiper/modules';
import SliderTopFive from "../SliderTopFive/SliderTopFive";

const SliderVideo = () : JSX.Element => {
    const {videos, loading} = useVideos();

    if (loading) {
        return <Preloader/>;
    }

    return (
        <div className="carouselVideo">
            {!videos ? (<SliderTopFive/>) : (
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={{clickable: true}}
                    loop={true}
                >
                    {videos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-video">
                                <video controls className="video" preload="metadata">
                                    <source src={video.src} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}

export default SliderVideo;