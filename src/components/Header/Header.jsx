import { useNavigate } from 'react-router-dom';
import * as S from './style';

const Header = ({ handleInputChange, value }) => {
  const navigate = useNavigate();

  return (
    <header>
      <S.Nav>
        <S.Div>
          <S.StyledLink to="/">Home</S.StyledLink>
          <S.StyledLink to="/create">Create</S.StyledLink>
        </S.Div>
        <S.Input
          type="search"
          placeholder="🔍︎ Search"
          onClick={() => navigate('/')}
          value={value}
          onChange={handleInputChange}
        />
      </S.Nav>
    </header>
  );
};

export default Header;
