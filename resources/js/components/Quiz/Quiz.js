import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { QuestionCard } from './QuestionCard';
import { QuizAddModal } from './QuizAddModal';

function Quiz(){
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
            <QuestionCard quizzes={quizzes} />
            <QuizAddModal />
        </div>
    )
}
// export default Quiz;

if (document.getElementById('quiz')) {
    ReactDOM.render(<Quiz />, document.getElementById('quiz'));
}