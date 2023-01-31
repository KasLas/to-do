import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Nav>
        <Div>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/create">Create</StyledLink>
        </Div>
        <Input type="search" placeholder="🔍︎ Search" />
      </Nav>
    </header>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 2rem;
  background: linear-gradient(to right, #574ae2, #222a68);
`;

const Div = styled.div`
  display: flex;
  gap: 2rem;
  color: white;
  align-items: baseline;
`;

const StyledLink = styled(Link)`
  font-size: 25px;
  padding: 0.5rem;
  border-radius: 30px;
  &:hover {
    color: #ccc;
    background: rgba(0, 0, 0, 0.1);
  }
  &:active {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Input = styled.input`
  background: white;
  border-radius: 10px;
  padding: 5px;
  border: 2px solid white;

  &:hover {
    border: 2px solid black;
  }
  &:focus {
    border: 2px solid black;
  }
`;

export default Header;
