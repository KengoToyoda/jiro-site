import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {QuestionItem} from './QuestionItem';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
    
export const QuestionCard = (props) =>{
    
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const answerDestinctioin = props.answerDesdtinctioin;
    
    return (
    <div>
        {props.quizzes.map((quiz) => (
            <Accordion key={quiz.id} expanded={expanded === 'panel' + quiz.id} onChange={handleChange('panel' + quiz.id)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={'panel'+ quiz.id +'bh-content'}
                  id={'panel'+ quiz.id +'bh-header'}
                >
                    <Typography sx={{ width: '100%', flexShrink: 0 }}>
                    {quiz.question}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <QuestionItem  
                        questions={quiz.questions}
                    />
                </AccordionDetails>
            </Accordion>
        ))}
    </div>
  );

}

