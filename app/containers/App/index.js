/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #262B49;
  margin: 0;
  padding: 0;
`;

export default function App() {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Wrapper>
  );
}
