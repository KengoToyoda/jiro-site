import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
    
export const ListQuiz = (props) =>{
    const { 
        quizzes,
    } = props;
    
    return (
        <ul>
        {props.quizzes.map((quiz) => (
                <li key={quiz.id}>{ quiz.question }</li>
        ))}
        
        </ul>
    )
}

