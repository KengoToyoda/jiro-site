import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {QuestionItem} from './QuestionItem';
    
export const QuestionCard = (props) =>{
    // const { 
    //     quizzes,
    // } = props;
    
    return (
        <div>
         <div className="q-secion">
            <div className="q-count">
                <span >Question 1</span>/{props.quizzes.length}
            </div>
         </div>
         <div className="q-text"></div>
         <div className="a-section">
            {props.quizzes.map((quiz) => (
                <QuestionItem  
                    question={quiz.question}
                    questions={quiz.questions}
                    key={quiz.id}
                />
            ))}
         </div>
        </div>
        
        
    )
}

