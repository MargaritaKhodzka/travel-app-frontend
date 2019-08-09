import React from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from './DestinationCard';

const DestinationsList = props => {

  return (
    <div className='DestinationContainer'>

      <div>
        <Link to='/destinations/new' className='NewDestinationButton' role='button'>Add A New Destination</Link>
      </div>

      <h3>Destinations</h3>
      {props.destinations.map(destination => <DestinationCard key={destination.id} destination={destination} />)}
    </div>
  );
};

export default DestinationsList;
