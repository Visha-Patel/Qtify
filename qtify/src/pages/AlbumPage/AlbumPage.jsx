import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbum } from "../../api/api"; 
import AlbumHeader from "./AlbumHeader/AlbumHeader";
import SongsTable from "./Songs/songsTable";
import Box from "@mui/material/Box";
import styles from "./Album.module.css";

export default function AlbumPage() {
  const { albumId } = useParams();
  const [albumData, setAlbumData] = useState({});
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAlbum(albumId);
        setSongs(data.songs);
        // console.log(data.songs);
        setAlbumData({
          image: data.image,
          title: data.title,
          follows: data.follows,
          description: data.description
        });
      } catch (error) {
        console.error("Error fetching album data:", error);
      }
    };
    fetchData();
  }, [albumId]);
    // console.log(songs);
  

  return <Box className={styles.page}>
    
    <AlbumHeader album={albumData}/>
    <SongsTable songs={songs}/>
  </Box>;
}