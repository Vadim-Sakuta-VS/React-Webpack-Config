import { hot } from 'react-hot-loader/root';
import React from 'react';
import Header from './components/Header/Header';
import styled from 'styled-components';

const StyledApp = styled.div`
  background: antiquewhite;
  min-height: 100vh;
  font-size: 20px;
`;

const App = () => {
  return (
    <StyledApp>
      <Header />
      App body
    </StyledApp>
  );
};

export default hot(App);
