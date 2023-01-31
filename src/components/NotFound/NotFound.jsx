import * as S from './style';

const NotFound = () => {
  return (
    <S.Div>
      <S.H2>Sorry,</S.H2>
      <p>That page cannot be found</p>
      <S.StyledLink to="/">Homepage</S.StyledLink>
    </S.Div>
  );
};

export default NotFound;
