import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    text-decoration: underline;
  }
`;
