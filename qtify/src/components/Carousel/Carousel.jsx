import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
 
function CarouselControls() {
  return (
    <div>
      <CarouselLeftNavigation />
      <CarouselRightNavigation />
    </div>
  );
}
 
function Carousel({ data, renderComponent }) {
  const [swiperInstance, setSwiperInstance] = useState(null);
 
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        <CarouselControls />
        {data.map((ele) => (
          <SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
 
export default Carousel;