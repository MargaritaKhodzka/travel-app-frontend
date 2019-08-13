import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route exact path='/destinations' render={(routerProps) => <DestinationsList {...routerProps} destinations={this.props.destinations} />} />
          <Route exact path='/destinations/new' component={DestinationInput} />
          <Route exact path='/destinations/:id' render={(routerProps) => <DestinationCard {...routerProps} destinations={this.props.destinations} />} />
        </Switch>
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
