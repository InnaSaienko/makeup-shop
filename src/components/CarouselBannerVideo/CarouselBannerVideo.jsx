import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const importVideos = () => {
    const context = require.context('../../assets/videos', false, /\.(mp4|webm)$/);
    return context.keys().map((key) => ({
        src: context(key),
        title: key.replace('./', '').replace(/\.(mp4|webm)$/, ''),
    }));
};

const videos = importVideos();

const CarouselBannerVideo = () => {
    return (
        <div className="carouselVideo">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                style={{ height: 'auto' }}
            >
                {videos.map((video, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-video">
                            <video
                                controls
                                className="video"
                            >
                                <source src={video.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        {/* <p style={{ textAlign: 'center', marginTop: '10px' }}>{video.title}</p> */}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarouselBannerVideo;
