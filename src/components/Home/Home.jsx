import * as S from './style';
import NotFound from '../NotFound/NotFound';
import { useEffect, useState } from 'react';

const TaskList = ({ list }) => {
  return (
    <>
      {list &&
        list.map((task, index) => (
          <S.Item key={index}>
            <div>
              <S.H1>{task.name}</S.H1>
              <S.P>{task.description}</S.P>
            </div>
            <div>
              <S.Date>{task.date}</S.Date>
              <S.Div>
                <S.Button onClick={() => {}}>Delete</S.Button>
                <S.StyledLink to={`/edit/${index}`}>Edit</S.StyledLink>
              </S.Div>
            </div>
          </S.Item>
        ))}
    </>
  );
};

const Home = ({ value }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    return JSON.parse(localStorage.getItem('tasks'));
  };

  // UseEffect that runs once on the initial app load
  useEffect(() => {
    setTasks(getTasks());
  }, []);

  return (
    <S.Content>
      {value && value.length !== 0 && (
        <NotFound desc="That search cannot be found" displayButton={false} />
      )}
      <>
        {value && (
          <TaskList
            list={tasks.filter((task) => {
              if (task.name.includes(value)) {
                return task;
              }
            })}
          />
        )}
        {!value && <TaskList list={tasks} />}
      </>
    </S.Content>
  );
};

export default Home;
