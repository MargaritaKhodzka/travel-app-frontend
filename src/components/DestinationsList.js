import React from 'react';
import DestinationCard from './DestinationCard';
import './Destinations.css';

const DestinationsList = ({destinations}) => {

  return (
    <div className='DestinationContainer'>
      <h3>Destinations</h3>
      {destinations.map(destination => <DestinationCard key={destination.id} destination={destination} />)}
    </div>
  );
};

export default DestinationsList;
