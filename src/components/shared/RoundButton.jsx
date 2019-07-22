import React from 'react';

import './RoundButton.scss';

const RoundButton = (props) => (
  <button type="button" className="btn btn-primary round-button">
    {props.children}
  </button>
)

export default RoundButton;
