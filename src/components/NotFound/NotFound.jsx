import * as S from './style';

const NotFound = ({ desc, displayButton }) => {
  return (
    <S.Div>
      <S.H2>Sorry,</S.H2>
      <p>{desc}</p>
      {displayButton && <S.StyledLink to="/">Homepage</S.StyledLink>}
    </S.Div>
  );
};

export default NotFound;
