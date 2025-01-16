import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./SwiperSlide.scss"
import { Navigation, Pagination } from 'swiper/modules';


export default function VideoSlider(props) {
    const { data = [] } = props;
    console.log("VideoSlider data:", data);

    return (
        <div className="carouselVideo">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                style={{ height: 'auto' }}
            >
                {data.map((video, index) => (
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

