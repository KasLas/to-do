import * as S from './style';
import NotFound from '../NotFound/NotFound';

const Home = ({ allTasks }) => {
  return (
    <S.Content>
      {allTasks.length === 0 ? (
        <NotFound desc="That search cannot be found" displayButton={false} />
      ) : (
        <>
          {allTasks.map((task, index) => (
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
      )}
    </S.Content>
  );
};

export default Home;
