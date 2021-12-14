import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Choice } from './FormParts/Choice';
import { Image } from './FormParts/Image';
import { Title } from './FormParts/Title';
import { Button } from './FormParts/Button';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';

const ChoiceContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
`;
  
export const QuizAddContent = (props) => {
  const choices = ['答えを追加1', '答えを追加2', '答えを追加3', '答えを追加4'];
  const [title, setTitle] = useState('');
  const [quizImage, setQuizImage] = useState('');
  const [ansewer, setAnsewer] = useState('');
  const [choiceInput, setChoiceInput] = useState([]);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  
  // const handleSubmit = (e) => {
  //       event.preventDefault();
  //       const Pram = new FormData();
  //       // Pram.append('image', image);
  //       // Pram.append('csrf', csrf);
  //       let config = {
  //         headers: {
  //           'content-type': 'multipart/form-data',
  //         },
  //       };
       
  //       config.headers['X-HTTP-Method-Override'] = 'PUT';
  //       //一旦POSTで送って上記でPUTに上書き
  //       axios
  //       .post()
  //       .then(response => {
  //           const myjiro = response.data
  //           // props.onSetMyjiro(myjiro);
  //           alert('successful')
  //       })
  //         .catch(error => {
  //           console.log(error);
  //       });
  //   }
  
  // console.log(title);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title register={register}/>
        <Image register={register}/>
        <ChoiceContainer>
          { choices.map((choice, index) => (
            <Choice 
              placeholderName={choice} 
              key={index} 
              AnswerNum={index} 
              onSetChoiceInput={setChoiceInput}
              onSetAnswer={setAnsewer}
            />
            ))
          }
        </ChoiceContainer>
        <Button />
      </form>
    </div>
  )
}
