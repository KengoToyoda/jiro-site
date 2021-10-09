import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
    
export const QuestionDetail = (props) =>{
    const answerOption = '';
    return (
        <div>
            <input type="radio" name={answerOption}/>
            <label>{props.answerText}</label>
        </div>
    )
}

