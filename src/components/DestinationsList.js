import React from 'react';
import DestinationCard from './DestinationCard';
import './Destinations.css'

const DestinationsList = props => {
  return (
    <div className='DestinationContainer'>
      <h3>Destinations</h3>
      {props.destinations.map(destination => <DestinationCard key={destination.id} destination={destination} />)}
    </div>
  )
}

export default DestinationsList;
