import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { QuestionDetail } from './QuestionDetail';
    
export const QuestionItem = (props) =>{
    // const { 
    //     questions,
    // } = props;
    console.log(props.questions);
    const answerName = 'answerName';
    
    return (
        <div>
            <span>{props.question}</span>
            <ul className="">
                {props.questions.map((question)=>(
                    <li key={question.id}>
                        <input key={question.id} type="radio" name={answerName}/>
                        <label>{question.answerText}</label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

