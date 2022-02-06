/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  background: #F2F0EB;
  margin: 0;
  padding: 0;
  height: calc(90%);
  overflow-x: hidden;
`;

const Display = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-height: calc(100vh);
  width: calc(100%);
`;

export default function App() {
  return (
    <Display>
      <Router>
        <div className="App" id="outer-container">
          <Header />
          <Menu outerContainerId={'outer-container'} pageWrapId={'page-wrap'} />
          <Wrapper id="page-wrap">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Wrapper>
        </div>
        <GlobalStyle />
      </Router>
    </Display>
  );
}
