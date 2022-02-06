
import React from 'react';
import {push as BurgerMenu} from 'react-burger-menu';
import { Link } from 'react-router-dom';
const reduxBurgerMenu = require('redux-burger-menu');
const { decorator } = reduxBurgerMenu;

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    left: '25px',
    top: '25px'
  },
  bmBurgerBars: {
    background: '#FAFAFA'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#272D36',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Menu = ({
  outerContainerId,
  pageWrapId,
}) => {
  return (
      <BurgerMenu styles={ styles } pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
        <Link id="HomePage" className={styles.bmItem} to="/">
          Home
        </Link>
      </BurgerMenu>
    );
}
export default decorator(Menu);