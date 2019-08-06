import React from 'react';
import './Destinations.css'

const DestinationsList = ({destinations}) => {

  return (
    <div className='DestinationContainer'>
      <h3>Destinations</h3>
      {destinations.map(destination => <li key={destination.id}>{destination.name} - {destination.country}</li>)}
    </div>
  )
}

export default DestinationsList;
