import React from 'react';
import { connect } from 'react-redux';
import Destinations from './containers/Destinations';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Destinations />
      </div>
    );
  }
}

export default connect()(App);
