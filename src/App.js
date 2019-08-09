import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Destinations from './containers/Destinations';
import NavBar from './components/NavBar';
import Home from './components/Home';
import DestinationPage from './components/DestinationPage';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/destinations' component={Destinations}/>
          <Route exact path='/destinations/:id' component={DestinationPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
