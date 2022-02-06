import React, {Component} from 'react';
import styled from 'styled-components';

const Navbar = styled.section`
  display: flex;
  flex-direction: row-reverse;
  margin 0;
  min-width: 100vw;
  min-height: 7.5%;
  background: #000000;
  position: sticky;
  top: 0;
`;

export default function Header() {
  return (
    <Navbar></Navbar>
  );
}