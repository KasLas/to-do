import * as S from './style';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import NotFound from '../NotFound/NotFound';

const Form = ({ title }) => {
  const [formValues, setFormValues] = useState({ name: '', description: '' });
  const { id } = useParams();

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);

    const taskToWriteToLocalStorage = {
      ...formValues,
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString(),
    };

    const newArr = [];
    const allTasks = JSON.parse(localStorage.getItem('tasks'));

    if (allTasks) {
      allTasks.push(taskToWriteToLocalStorage);
      localStorage.setItem('tasks', JSON.stringify(allTasks));
    } else {
      newArr.push(taskToWriteToLocalStorage);
      localStorage.setItem('tasks', JSON.stringify(newArr));
    }

    navigate('/');
  };

  function handleFormInputChange(e) {
    const { name, value } = e.target;
    setFormValues((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }

  const handleCancelClick = () => {
    navigate('/');
  };

  // const selectedItem =
  //   localStorage.getItem('tasks') &&
  //   JSON.parse(localStorage.getItem('tasks')).filter(
  //     (task, index) => index === Number(id)
  //   )[0];

  // const editTask = Boolean(selectedItem);
  // const fakeTask = !editTask && Boolean(id);

  // const {
  //   name: nameTemp,
  //   description: descriptionTemp,
  //   date,
  // } = editTask && selectedItem;

  // const [name, setName] = useState(editTask ? nameTemp : '');
  // const [description, setDescription] = useState(
  //   editTask ? descriptionTemp : ''
  // );

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (e.type === 'submit') {
  //     let task = {
  //       name: e.target[0].value,
  //       description: e.target[1].value,
  //       date: e.target[2].value,
  //     };
  //     let taskArr = JSON.parse(localStorage.getItem('tasks'));

  //     if (taskArr) {
  //       if (editTask) {
  //         taskArr = taskArr.map((item, index) =>
  //           index === Number(id) ? task : item
  //         );
  //       } else {
  //         taskArr.push(task);
  //       }
  //     } else {
  //       taskArr = [task];
  //     }

  //     localStorage.setItem('tasks', JSON.stringify(taskArr));
  //   }
  //   navigate('/');
  // };

  // const getDate = () => {
  //   const date = new Date();

  //   let day = date.getDate();
  //   let month = date.getMonth() + 1;
  //   let year = date.getFullYear();

  //   if (month < 10) month = '0' + month;
  //   if (day < 10) day = '0' + day;

  //   return year + '-' + month + '-' + day;
  // };

  return (
    <div>
      <S.Content>
        <div>
          <S.H1>{title}</S.H1>
          <form
            onSubmit={(e) => {
              handleFormSubmit(e);
            }}
          >
            <label htmlFor="task-name">Task name:</label>
            <S.Input
              type="text"
              id="task-name"
              name="name"
              value={formValues.name}
              onChange={handleFormInputChange}
              required
            />
            <label htmlFor="description">Description:</label>
            <S.Textarea
              id="description"
              name="description"
              value={formValues.description}
              onChange={handleFormInputChange}
              required
            />
            <label htmlFor="date">Date created:</label>
            <S.Div>
              <S.InputButton
                background="#FD151B"
                type="button"
                value="Cancel"
                onClick={handleCancelClick}
              />
              <S.InputButton background="#16DB93" type="submit" value="Save" />
            </S.Div>
          </form>
        </div>
      </S.Content>
    </div>
  );
};

export default Form;
