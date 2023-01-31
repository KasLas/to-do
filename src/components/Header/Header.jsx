import * as S from './style';

const Header = () => {
  return (
    <header>
      <S.Nav>
        <S.Div>
          <S.StyledLink to="/">Home</S.StyledLink>
          <S.StyledLink to="/create">Create</S.StyledLink>
        </S.Div>
        <S.Input type="search" placeholder="🔍︎ Search" />
      </S.Nav>
    </header>
  );
};

export default Header;
