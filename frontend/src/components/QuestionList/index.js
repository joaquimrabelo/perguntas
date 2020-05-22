import React, { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';

import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Container, Question } from './styles';

const QueryQuestions = gql`
  query {
    questions {
      id
      description
    }
  }
`;

const MutationDeleteQuestion = gql`
  mutation deleteQuestion($id: ID!) {
    deleteQuestion(id: $id)
  }
`;

function QuestionList() {
  const { loading, error, data, refetch,  } = useQuery(QueryQuestions);
  const [deleteQuestion] = useMutation(MutationDeleteQuestion);

  const handleDelete = useCallback((id) => {
    console.log('delete', id);
    async function handleDeleteFunc(id) {
      await deleteQuestion({ variables: { id }});
      refetch();
    }
    handleDeleteFunc(id);
  }, []);

  if (loading){
    return (
      <Container>
        <div className="container">
          <h2>Carregando dados...</h2>
        </div>
      </Container>
    );
  }
  
  if (error){
    return (
      <Container>
        <div className="container">
          <h2>Ocorreu um erro ao buscar os dados</h2>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="container">
        <div className="row questions__header">
          <div>Perguntas</div>
          <div>Opções</div>
        </div>
        {data.questions.map(item => (
          <Question className="row" key={item.id}>
            <div>{item.description}</div>
            <div>
              <Link to={`/question/${item.id}`} className="edit__question">Editar</Link>
              <button className="delete__question" onClick={() => handleDelete(item.id)}>Deletar</button>
            </div>
          </Question>
        ))}
      </div>
    </Container>
  );
};

export default QuestionList;