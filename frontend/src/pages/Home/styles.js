import styled from 'styled-components';

export const Container = styled.div`

  margin-top: 30px;

  .row {
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 18px
  }

  a {
    background-color: #ffbc00;
    color: #fff;
    padding: 10px 20px;
    font-weight: 500;
    text-decoration: none;
    border-radius: 6px;
    transition: background-color 0.3s;
    
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
    }

    &:hover {
      background-color: #eda900;
    }
  }
`;