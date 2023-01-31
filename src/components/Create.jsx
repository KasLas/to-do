//import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  //const [taskName, setTaskName] = useState(null);
  //const [description, setDescription] = useState(null);
  //const [date, setDate] = useState(null);
  const navigate = useNavigate();

  const getDate = () => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

    return year + '-' + month + '-' + day;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.type === 'submit') {
      console.log(
        e.target[0].value +
          '    ' +
          e.target[1].value +
          '    ' +
          e.target[2].value
      );
    }
    navigate('/');
  };

  return (
    <Content>
      <H1>Create a New Task</H1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="task-name">Task name:</label>
        <Input
          type="text"
          id="task-name"
          //onChange={(e) => setTaskName(e.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <Textarea
          id="description"
          //onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label htmlFor="date">Date created:</label>
        <Input type="date" id="date" value={getDate()} readOnly />

        <Div>
          <InputButton
            background="#FD151B"
            type="button"
            value="Cancel"
            onClick={handleSubmit}
          />
          <InputButton background="#16DB93" type="submit" value="Save" />
        </Div>
      </form>
    </Content>
  );
};

const H1 = styled.h1`
  font-size: 30px;
  color: #222a68;
  font-weight: bold;
  margin: 3rem auto;
  border-bottom: 1px solid #222a68;
  padding-bottom: 1rem;
  text-align: center;
`;

const Content = styled.div`
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

const Input = styled.input`
  ${sharedStyle}
`;

const Textarea = styled.textarea`
  ${sharedStyle}
  resize: both;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const InputButton = styled.input`
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

export default Create;
