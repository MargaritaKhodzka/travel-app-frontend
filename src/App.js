import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Destinations from './containers/Destinations';
import NavBar from './components/NavBar';
import DestinationsList from './components/DestinationsList';
import DestinationInput from './components/DestinationInput';
import DestinationPage from './components/DestinationPage';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Route exact path='/' component={Destinations} />
          <Route exact path='/destinations' component={DestinationsList}/>
          <Route exact path='/destinations/:id' component={DestinationPage}/>
          <Route exact path='/destination/new' component={DestinationInput}/>
        </div>
      </Router>
    );
  }
}

export default App;
