import React, { Component } from 'react';

import Head from './header/Head.jsx';
import Main from './main/Main.jsx';

export class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Head />
        <Main />
        My App!
      </React.Fragment>
    )
  }
}

export default App;
