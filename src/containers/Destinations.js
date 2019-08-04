import React from 'react';
import DestinationInput from '../components/DestinationInput';
import DestinationsList from '../components/DestinationsList';

class Destinations extends React.Component {
  render() {
    return (
      <div>
        <DestinationInput />
        <DestinationsList />
      </div>
    )
  }
}

export default Destinations;
