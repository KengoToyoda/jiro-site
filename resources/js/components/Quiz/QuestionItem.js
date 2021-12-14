import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';


export const QuestionItem = (props) =>{
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');
  const [answer, setAnswer] = React.useState('');
  
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };
  
  const StyledFormControlLabel = styled(FormControlLabel)`
    background-color: #fff9c4;
    margin: 0; 
    border-bottom: 1px solid #bdbdbd;
  `;
  
  const StyledFormControl = styled(FormControl)`
    width: 100%;
    margin: 0!important;
  `;  

  const handleSubmit = (event) => {
    event.preventDefault();

    if (answer === 1) {
      setHelperText('You got it!');
      setError(false);
    } else if (answer === 0) {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };
    return (
    <form onSubmit={handleSubmit}>
      <StyledFormControl
        sx={{ m: 3 }}
        component="fieldset"
        error={error}
        variant="standard"
      >
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          {props.questions.map((question) =>(
            <StyledFormControlLabel 
            value={question.answerText} 
            label={question.answerText} 
            control={<Radio />} 
            onClick={() => setAnswer(question.isCorrect)} 
            key={question.id}
            />
            ))
          }
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </StyledFormControl>
    </form>
  );
}

