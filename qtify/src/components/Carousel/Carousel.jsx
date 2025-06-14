import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

function Carousel({ data: initialData, renderComponent }) {
  const [data, setData] = useState(initialData);
  const [clickCount, setClickCount] = useState(0);

  const handleRightClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    if (clickCount >= 3) {
      setData((prevData) => prevData.slice(2));
      setClickCount(0);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <div>
          <CarouselLeftNavigation />
          <div onClick={handleRightClick}>
            <CarouselRightNavigation />
          </div>
        </div>
        {data.map((ele) => (
          <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;