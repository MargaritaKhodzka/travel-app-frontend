import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Destinations from './containers/Destinations';
import NavBar from './components/NavBar';

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Destinations />
        </div>
      </Router>
    );
  }
}

export default App;
