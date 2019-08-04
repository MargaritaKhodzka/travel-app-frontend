import React from 'react';
import { connect } from 'react-redux';

import {fetchDestinations} from '../actions/fetchDestinations';
import DestinationInput from '../components/DestinationInput';
import DestinationsList from '../components/DestinationsList';

class Destinations extends React.Component {

  componentDidMount() {
    this.props.fetchDestinations()
  }

  render() {
    return (
      <div>
        <DestinationInput />
        <DestinationsList destinations={this.props.destinations} />
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
