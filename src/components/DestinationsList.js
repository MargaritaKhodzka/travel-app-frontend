import React from 'react';
import { Link } from 'react-router-dom';

const DestinationsList = props => {

  return (
    <div className='DestinationContainer'>

      <div>
        <Link to='/destinations/new' className='NewDestinationButton' role='button'>Add A New Destination</Link>
      </div>

      <h3>Destinations</h3>
      {props.destinations.map(destination =>
        <li key={destination.id}>
          <Link to={`/destinations/${destination.id}`}>
            {destination.name} - {destination.country}
          </Link>
        </li>
      )}
    </div>
  );
};

export default DestinationsList;
