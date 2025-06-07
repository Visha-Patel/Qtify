import React, { useState,useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import { fetchQuetion } from '../../api/api';
import styles from './Accordian.module.css';

// const data={
//     question: "Is QTify free to use?",
//     answer: "Yes! It is 100% free, and has 0% ads!"
//     };

const Accordian = () => {
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchQuetion();
                setQuestion(data.data);
                console.log(data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    },[])


    return (
        <Box className={styles.accordionWrapper}>
        <h1>FAQs</h1>
        {question.map((data, index) => (
            <Accordion className={styles.accordion} key={index}>
        <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon className={styles.nav} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={styles.que}
        >
            <Typography className={styles.title}>{data.question}</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
            {data.answer}
        </AccordionDetails>
        </Accordion>
        ))
}
        </Box>
    );
}

export default Accordian;