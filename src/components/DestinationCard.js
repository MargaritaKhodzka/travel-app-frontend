import React from 'react';
import { connect } from 'react-redux';
import { deleteDestination } from '../actions/destinationActions';

const DestinationCard = ({destination}) => {

  const handleClick = () => {
    deleteDestination(destination.id)
  }

  return (
    <div key={destination.id} className = 'DestinationCard'>
      <button onClick={handleClick} className='DeleteButton'>x</button>
      <h4>{destination.name} - {destination.country}</h4>
      <br/>
      <img className='DestinationImage' src={destination.image} alt={destination.name} />
    </div>
  );
};

export default connect(null, {deleteDestination})(DestinationCard);
