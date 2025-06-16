import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

function CarouselControls({ handleRightClick }) {
  return (
    <div>
      <CarouselLeftNavigation />
      <div onClick={handleRightClick}>
        <CarouselRightNavigation />
      </div>
    </div>
  );
}

function Carousel({ data: initialData, renderComponent }) {
  const [data, setData] = useState(initialData);
  const [clickCount, setClickCount] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleRightClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 4) {
        setData((prevData) => prevData.slice(2));
        setClickCount(0);
        if (swiperInstance) {
          swiperInstance.slideTo(0);
        }
      }
      return newCount;
    });
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
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        <CarouselControls handleRightClick={handleRightClick} />
        {data.map((ele) => (
          <SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;