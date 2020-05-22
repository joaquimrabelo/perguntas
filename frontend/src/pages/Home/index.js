import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import Header from '../../components/Header';
import QuestionList from '../../components/QuestionList';
import { Container } from './styles';

function Home() {
  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <div className="row">
            <h1>Perguntas de múltipla escolha</h1>
            <Link to="/question">
              <FaPlus />
              <span>Adicionar</span>
            </Link>
          </div>
        </div>
      </Container>
      <QuestionList />
    </>
  );
}

export default Home;
