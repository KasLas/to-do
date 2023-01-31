import styled, { css } from 'styled-components';

export const H1 = styled.h1`
  font-size: 30px;
  color: #222a68;
  font-weight: bold;
  margin: 3rem auto;
  border-bottom: 1px solid #222a68;
  padding-bottom: 1rem;
  text-align: center;
`;

export const Content = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const sharedStyle = css`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.5rem;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 2rem;

  &:hover:not(input[type='date']) {
    border: 1px solid black;
  }
  &:focus:not(input[type='date']) {
    border: 1px solid black;
  }
`;

export const Input = styled.input`
  ${sharedStyle}
`;

export const Textarea = styled.textarea`
  ${sharedStyle}
  resize: both;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const InputButton = styled.input`
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  background: ${(props) => props.background};

  &:hover {
    background: #ccc;
  }
  &:active {
    background: #999;
  }
`;
