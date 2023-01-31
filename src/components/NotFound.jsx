import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Div>
      <H2>Sorry,</H2>
      <p>That page cannot be found</p>
      <StyledLink to="/">Homepage</StyledLink>
    </Div>
  );
};

const Div = styled.div`
  margin: 3rem;
  line-height: 40px;
`;

const H2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  background: #ab81cd;
  color: white;
  border-radius: 5px;
  padding: 0.3rem;

  &:hover {
    background: #999;
  }
`;

export default NotFound;
