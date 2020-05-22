import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import Header from '../../components/Header';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { Container, InputGroup, ButtonAnswer, ButtonSubmit } from './styles';

const MutationCreateQuestion = gql`
  mutation createQuestion($description: String!) {
    createQuestion(description: $description)
  }
`;

function Home() {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState();

  const [createQuestion] = useMutation(MutationCreateQuestion);

  const handleAddAnswer = () => {
    setAnswers([...answers, '']);
  }
  
  const handleChangeAnswer = (index, value) => {
    let newAnswers = answers;
    newAnswers[index] = value;
    setAnswers(newAnswers);
  }

  const handleSubmit = () => {
    createQuestion(question);
  }

  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <div className="row">
            <h1>Cadastrar pergunta</h1>
            <Link to="/">
              <FaArrowLeft />
              <span>Voltar</span>
            </Link>
          </div>
          <InputGroup>
            <label className="question">Pergunta</label>
            <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)}/>
          </InputGroup>
          <div className="row">
            <ButtonAnswer onClick={handleAddAnswer}>
              <FaPlus />
              Adicionar resposta
            </ButtonAnswer>
          </div>
          {answers && answers.map((answer, index) => (
            <InputGroup key={index}>
              <label>Resposta</label>
              <input 
                type="text" 
                value={answer} 
                onChange={(e) => handleChangeAnswer(index, e.target.value)} 
              />
            </InputGroup>
          ))}
          <div className="row">
            <ButtonSubmit onClick={handleSubmit}>Salvar</ButtonSubmit>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
