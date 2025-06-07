import React,{useState,useEffect} from "react";
import {useSwiper} from "swiper/react";
// import {ReactComponent as RightArrow} from "../../../assets/RightArrow.svg";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from "./CarouselRightNavigation.module.css";

function CarouselRightNavigation() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        const handleChange = () => {
            setIsEnd(swiper.isEnd);
        };

        //set initial state
        setIsEnd(swiper.isEnd);

        //add event listeners
        swiper.on("slideChange", handleChange);

        //cleanup function to remove event listeners
        return () => {
            swiper.off("slideChange", handleChange);
        };
    },[swiper]);


    return (
        <div className={styles.rightNavigation}>
            
                <KeyboardArrowRightIcon 
                    className = {styles.arrow}
                    onClick={() => !isEnd && swiper.slideNext()}
                    aria-label="Next Slide"
                    data-cy="carousel-next-button"
                    style={{
                        visibility: isEnd ? "hidden" : "visible",
                        pointerEvents: isEnd ? "none" : "auto",
                    }}
                    
                />
            
        </div>
    )
}


export default CarouselRightNavigation;