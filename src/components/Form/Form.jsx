import * as S from './style';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import NotFound from '../NotFound/NotFound';

const Form = ({ title }) => {
  const { id } = useParams();

  const editTask = Boolean(localStorage.getItem(id));
  const fakeTask = !editTask && Boolean(id);

  const {
    name: nameTemp,
    description: descriptionTemp,
    date,
  } = editTask && JSON.parse(localStorage.getItem(id));

  const [name, setName] = useState(editTask ? nameTemp : '');
  const [description, setDescription] = useState(
    editTask ? descriptionTemp : ''
  );
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.type === 'submit') {
      const task = JSON.stringify({
        name: e.target[0].value,
        description: e.target[1].value,
        date: e.target[2].value,
      });

      if (editTask) {
        localStorage.setItem(id, task);
      } else {
        let id;

        !localStorage.length
          ? (id = 0)
          : (id =
              Number(
                Object.keys(localStorage)
                  .sort(function (a, b) {
                    return a - b;
                  })
                  .pop()
              ) + 1);

        localStorage.setItem(id, task);
      }
    }
    navigate('/');
  };

  const getDate = () => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

    return year + '-' + month + '-' + day;
  };

  return (
    <div>
      {fakeTask && <NotFound desc="That task cannot be found" />}
      <S.Content>
        {!fakeTask && (
          <div>
            <S.H1>{title}</S.H1>

            <form onSubmit={handleSubmit}>
              <label htmlFor="task-name">Task name:</label>
              <S.Input
                type="text"
                id="task-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label htmlFor="description">Description:</label>
              <S.Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <label htmlFor="date">Date created:</label>
              <S.Input
                type="date"
                id="date"
                value={editTask ? date : getDate()}
                readOnly
              />

              <S.Div>
                <S.InputButton
                  background="#FD151B"
                  type="button"
                  value="Cancel"
                  onClick={handleSubmit}
                />
                <S.InputButton
                  background="#16DB93"
                  type="submit"
                  value="Save"
                />
              </S.Div>
            </form>
          </div>
        )}
      </S.Content>
    </div>
  );
};

export default Form;
