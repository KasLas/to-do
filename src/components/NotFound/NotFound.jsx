import * as S from './style';

const NotFound = ({ desc }) => {
  return (
    <S.Div>
      <S.H2>Sorry,</S.H2>
      <p>{desc}</p>
      <S.StyledLink to="/">Homepage</S.StyledLink>
    </S.Div>
  );
};

export default NotFound;
