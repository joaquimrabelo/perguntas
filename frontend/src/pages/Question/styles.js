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
    background-color: #565656;
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
      background-color: #4a4a4a;
    }
  }
`;

export const InputGroup = styled.div`
  margin-top: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .question {
    margin-top: 30px;
  }
  
  label {
    font-size: 16px;
    margin-bottom: 5px;

    display: inline-block;
  }
  input {
    height: 40px;
    width: 100%;
    border-radius: 5px;
    border: 2px solid #565656;
  }
`;

export const ButtonAnswer = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #1d801d;
  color: #fff;
  border: none;
  border-radius: 5px;

  display: flex;
  align-items: center;

  &:hover {
    background-color: #176d17;
  }
`;

export const ButtonSubmit = styled.button`
  background-color: #ffbc00;
  color: #fff;
  padding: 10px 20px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s;
  
  margin-top: 20px;
  border: none;

  span {
    margin-left: 5px;
  }

  &:hover {
    background-color: #eda900;
  }
`;