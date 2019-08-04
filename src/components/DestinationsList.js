import React from 'react';

const DestinationsList = props => {
  return (
    <div>
      {props.destinations.map(destination => <li key={destination.id}>{destination.name} - {destination.country}</li>)}
    </div>
  )
}

export default DestinationsList;
