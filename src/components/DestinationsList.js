import React from 'react';

const DestinationsList = props => {
  return (
    <div>
      <h3>Destinations</h3>
      {props.destinations.map(destination =>
        <li key={destination.id}>
          {destination.name} - {destination.country}
          <br/>
          <img src={destination.image} alt={destination.name} />
        </li>
      )}
    </div>
  )
}

export default DestinationsList;
