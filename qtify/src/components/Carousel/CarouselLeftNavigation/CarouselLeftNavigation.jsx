import React,{useState,useEffect} from "react";
import {useSwiper} from "swiper/react";
// import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import styles from "./CarouselLeftNavigation.module.css";

function CarouselLeftNavigation() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true);

    useEffect(() => {
        const handleChange = () => {
            setIsBeginning(swiper.isBeginning);
        };

        //set initial state
        setIsBeginning(swiper.isBeginning);

        //add event listeners
        swiper.on("slideChange", handleChange);

        //cleanup function to remove event listeners
        return () => {
            swiper.off("slideChange", handleChange);
        };
    },[swiper]);


    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && (
                <KeyboardArrowLeftIcon 
                    className = {styles.arrow1}
                    onClick={() => swiper.slidePrev()}
                    aria-label="Previous Slide"
                />
            )}
        </div>
    )
}


export default CarouselLeftNavigation;