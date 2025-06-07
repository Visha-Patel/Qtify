import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import styles from './Songs.module.css';


function createTable({songs}){
    console.log(songs);
    if (!songs || songs.length === 0) {
    return <div>No songs found</div>;
  }
    return (
        <TableContainer  >
            <Table >
                <TableHead>
                    <TableRow className={styles.container}>
                        <TableCell>Title</TableCell>
                        <TableCell>Artist</TableCell>
                        
                        <TableCell>Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {songs.map((song) => (
                        <TableRow key={song.id}>
                            <TableCell>{song.title}</TableCell>
                            <TableCell>{song.artists[0]}</TableCell>
                            
                            <TableCell>{song.durationInMs}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>        
        </TableContainer>
    )
}


export default createTable