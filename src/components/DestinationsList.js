import React from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from './DestinationCard';

class DestinationsList extends React.Component {

  render () {
    return (
      <div className='DestinationContainer'>

        <div>
          <Link to='/destinations/new' className='NewDestinationButton' role='button'>Add A New Destination</Link>
        </div>

        <h3>Destinations</h3>
        {this.props.destinations.map(destination =>
          <div key={destination.id}>
            <DestinationCard destination={destination} />
          </div>
        )}
      </div>
    );
  }
};

export default DestinationsList;
