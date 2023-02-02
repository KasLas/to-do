import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const Header = ({ handleValue }) => {
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    handleValue(searchInput);
  });
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </S.Nav>
    </header>
  );
};

export default Header;
