import React from "react";  
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./AlbumHeader.module.css";
import Button from "../../../components/Button/Button";
import ShuffleIcon from '@mui/icons-material/Shuffle';
// import Button from "../../../components/Button";

// const data = {   
// id: "c08bf127-7a8f-4e6d-8f0e-e500ba6c2e26",
// title: "Shady Chest",
// description: "Quam quod excepturi quia fugiat aut fuga aliquid.",
// follows: 11110,
// image: "https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
// };


function AlbumHeader({album}) {
    const {image,title,follows,description} = album;

    return (
        <Box className={styles.AlbumHeader}>
            <Box className={styles.AlbumImg}>
                <img src={image} alt={title}/>
            </Box>
            <Box>
                <h2>{title}</h2>
                <p>{description}</p>
                <h4>{follows}</h4>
                <button className={styles.shuffle}><ShuffleIcon/>Shuffle</button>
            </Box>
        </Box>
    )

}

export default AlbumHeader;