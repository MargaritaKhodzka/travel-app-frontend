import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import {fetchDestinations} from '../actions/destinationActions';
import DestinationInput from '../components/DestinationInput';
import DestinationsList from '../components/DestinationsList';
import DestinationCard from '../components/DestinationCard';

class Destinations extends React.Component {

  componentDidMount() {
    this.props.fetchDestinations()
  }

  render() {
    return (
      <div>
        <Route path='/destinations/new' component={DestinationInput}/>
        <Route path='/destinations/:id' render={(routerProps) => <DestinationCard {...routerProps} destinations={this.props.destinations} />} />
        <Route exact path='/destinations' render={() => <DestinationsList destinations={this.props.destinations} />} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    destinations: state.destinations
  }
}

export default connect(mapStateToProps, {fetchDestinations})(Destinations);
