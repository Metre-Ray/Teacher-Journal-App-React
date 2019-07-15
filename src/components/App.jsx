import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Head from './header/Head.jsx';

export class App extends Component {
  // static propTypes = {}

  render() {
    return (
      <div>
        <Head />
        My App!
      </div>
    )
  }
}

export default App;

// ReactDOM.render(<App />, document.getElementById('app'))
