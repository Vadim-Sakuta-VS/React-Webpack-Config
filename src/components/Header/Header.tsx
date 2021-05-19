import React from 'react';
import './Header.css';
import styles from './Header.module.css';
import styled from 'styled-components';

const StyledHeader = styled.header`
  border-bottom: 1px solid orange;
`;

const Header = () => {
  return (
    <StyledHeader className={`header ${styles.header}`}>
      Header component
      <input type='text' />
    </StyledHeader>
  );
};

export default Header;
