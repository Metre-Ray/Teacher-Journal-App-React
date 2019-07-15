import React, { Component } from 'react';

import './head.scss';

import LanguageSelector from './LanguageSelector.jsx';
import Logo from './Logo.jsx';


export default class Head extends Component {
  render() {
    return (
      <header className="head">
        <Logo />
        <LanguageSelector />
      </header>
    )
  }
}
