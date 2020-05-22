import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 30px;

  .questions__header {
    justify-content: space-between;
    font-weight: bold;
    padding-bottom: 3px;
    margin-bottom: 15px;
    border-bottom: 2px solid #ccc;
  }
`;

export const Question = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 15px 0 5px;

  justify-content: space-between;

  a, button {
    text-decoration: none;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    font-size: 14px;
  }
  button {
    margin-left: 10px;
  }
  a.edit__question {
    background-color: #1d801d;

    &:hover {
      background-color: #176d17;
    }
  }

  .delete__question {
    background-color: #e85a5a;
    border: none;
    
    &:hover {
      background-color: #d25050;
    }
  }
`;