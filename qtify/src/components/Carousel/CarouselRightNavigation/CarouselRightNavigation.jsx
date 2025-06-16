import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./CarouselRightNavigation.module.css";

function CarouselRightNavigation({ handleRightClick }) {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const handleChange = () => {
      setIsEnd(swiper.isEnd);
    };
    setIsEnd(swiper.isEnd);
    swiper.on("slideChange", handleChange);
    return () => {
      swiper.off("slideChange", handleChange);
    };
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      <KeyboardArrowRightIcon
        className={styles.arrow}
        onClick={handleRightClick}
        aria-label="Next Slide"
        data-cy="carousel-next-button"
        style={{
          visibility: isEnd ? "hidden" : "visible",
          pointerEvents: isEnd ? "none" : "auto",
        }}
      />
    </div>
  );
}

export default CarouselRightNavigation;