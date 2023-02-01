import * as S from './style';

const Home = () => {
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
              <S.Button
                onClick={() => {
                  localStorage.removeItem(task[0]);
                  window.location.reload(false);
                }}
              >
                Delete
              </S.Button>
              <S.StyledLink to={`/edit/${task[0]}`}>Edit</S.StyledLink>
            </S.Div>
          </div>
        </S.Item>
      ))}
    </S.Content>
  );
};

export default Home;
