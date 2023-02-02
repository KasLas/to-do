import * as S from './style';
import { useState } from 'react';
import NotFound from '../NotFound/NotFound';

const Home = ({ searchValue }) => {
  const taskArr = JSON.parse(localStorage.getItem('tasks'));
  const [tasks, setTasks] = useState(taskArr ? taskArr : []);
  const hasSearchedButNoResult = Boolean(
    searchValue &&
      !tasks.filter((task) => task.name.includes(searchValue)).length
  );

  const deleteItem = (id) => {
    const updatedTaskArr = taskArr.filter((task, index) => index !== id);

    localStorage.setItem('tasks', JSON.stringify(updatedTaskArr));
    setTasks(updatedTaskArr);
  };

  return (
    <S.Content>
      {hasSearchedButNoResult && (
        <NotFound desc="That search cannot be found" displayButton={false} />
      )}

      {!hasSearchedButNoResult &&
        tasks
          .filter((task) =>
            searchValue ? task.name.includes(searchValue) : task
          )
          .map((task, index) => (
            <S.Item key={index}>
              <div>
                <S.H1>{task.name}</S.H1>
                <S.P>{task.description}</S.P>
              </div>
              <div>
                <S.Date>{task.date}</S.Date>
                <S.Div>
                  <S.Button
                    onClick={() => {
                      deleteItem(index);
                    }}
                  >
                    Delete
                  </S.Button>
                  <S.StyledLink to={`/edit/${index}`}>Edit</S.StyledLink>
                </S.Div>
              </div>
            </S.Item>
          ))}
    </S.Content>
  );
};

export default Home;
