import React, { Component } from 'react';

import './RoundButton.scss';

export default class RoundButton extends Component {
  render() {
    return (
      <button type="button" className="btn btn-primary round-button">
        {this.props.children}
      </button>
    )
  }
}
