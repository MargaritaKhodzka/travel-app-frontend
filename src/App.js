import React from 'react';
import { connect } from 'react-redux';
import fetchDestinations from './actions/fetchDestinations';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchDestinations({type: 'FETCH_DESTINATIONS', payload: {name: 'London'}})
  }

  render() {
    return (
      <div className='App'>
        App
      </div>
    );
  }
}

export default connect(null, {fetchDestinations})(App);
