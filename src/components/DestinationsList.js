import React from 'react';
import './Destinations.css'

const DestinationsList = props => {
  return (
    <div className='DestinationContainer'>
      <h3>Destinations</h3>
      {props.destinations.map(destination =>
        <h4 className = 'DestinationCard' key={destination.id}>
          {destination.name} - {destination.country}
          <br/>
          <img className='DestinationImage' src={destination.image} alt={destination.name} />
        </h4>
      )}
    </div>
  )
}

export default DestinationsList;
