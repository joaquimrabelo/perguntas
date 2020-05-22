import React from 'react';

import logoImg from '../../assets/logo.png';
import { Container } from './styles';

function Header() {
  console.log(logoImg);
  return (
    <Container>
      <div className="container">
        <div className="row">
          <img src={`/${logoImg}`} alt="Logo"/>
          <a href="#">Perfil</a>
        </div>
      </div>
    </Container>
  );
};

export default Header;