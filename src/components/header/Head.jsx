import React from 'react';

import './Head.scss';

import LanguageSelector from './LanguageSelector.jsx';
import Logo from './Logo.jsx';


const Head = () => (
  <header className="head">
    <Logo />
    <LanguageSelector />
  </header>
);

export default Head;
