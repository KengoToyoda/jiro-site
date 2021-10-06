import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ListQuiz } from './List';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Quiz() {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        axios
        .get('/quiz/fetch')
        .then(response => {
            setQuizzes(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    
    return(
        <div>
            <ListQuiz quizzes={quizzes} />
        </div>
    )
}
export default Quiz;

if (document.getElementById('quiz')) {
    ReactDOM.render(<Quiz />, document.getElementById('quiz'));
}