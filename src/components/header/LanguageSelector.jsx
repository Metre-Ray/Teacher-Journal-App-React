import React, { Component } from 'react'
import { PropTypes } from 'prop-types';

import './LanguageSelector.scss';

export default class LanguageSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      languages: [['en', 'English'], ['ru', 'Русский']],
      label: 'English'
    }
    this.onItemClick = this.onItemClick.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onItemClick(label) {
    this.setState((prevState) => {
      return { ...this.state, label }
    });
  }

  showMenu() {
    this.setState((prevState) => {
      return { ...this.state, flag: !prevState.flag }
    });
  }

  onMouseLeave() {
    this.setState((prevState) => {
      return { ...this.state, flag: false }
    });
  }

  render() {
    const { flag, label, languages } = this.state;

    return (
      <div className="language-selector dropdown" onMouseLeave={this.onMouseLeave}>
        <button
          className="dropdown__btn"
          onClick={this.showMenu}
          aria-label="Show language menu">
          <span className="fas fa-globe"></span>
          {label}
          <span className="fas fa-angle-down"></span>
        </button>
        { flag
          ? <div className="dropdown__content" >
              { languages.map((lang) =>
                <a href="#" key={lang[0]} onClick={() => this.onItemClick(lang[1])}>
                  {lang[1]}
                </a>
              ) }
            </div>
          : ''
        }
      </div>
    )
  }

}
