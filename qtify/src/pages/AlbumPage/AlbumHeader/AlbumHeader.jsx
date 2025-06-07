import React from "react";  
import Box from "@mui/material/Box";
import styles from "./AlbumHeader.module.css";
import ShuffleIcon from '@mui/icons-material/Shuffle';


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