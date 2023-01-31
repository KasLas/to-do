import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
  margin: 3rem;
  line-height: 40px;
`;

export const H2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

export const StyledLink = styled(Link)`
  background: #574ae2;
  color: white;
  border-radius: 5px;
  padding: 0.3rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }
  &:active {
    background: #999;
  }
`;
