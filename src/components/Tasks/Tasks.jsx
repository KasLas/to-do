import * as S from './style';

const Task = () => {
  return (
    <S.Content>
      {Object.entries(localStorage).map((task) => (
        <S.Item key={task[0]}>
          <div>
            <S.H1>{JSON.parse(task[1])['name']}</S.H1>
            <S.P>{JSON.parse(task[1])['description']}</S.P>
          </div>
          <div>
            <S.Date>{JSON.parse(task[1])['date']}</S.Date>
            <S.Div>
              <S.Button background="#FD151B">Delete</S.Button>
              <S.Button background="#16DB93">Edit</S.Button>
            </S.Div>
          </div>
        </S.Item>
      ))}
    </S.Content>
  );
};

export default Task;
