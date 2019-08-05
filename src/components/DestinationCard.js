import React from 'react';

const DestinationCard = ({ destination }) => {

  const handleClick = () => {
    this.props.deleteDestination(destination.id)
    const path = `/destinations`;
    this.props.history.push(path)
  }

  return (
    <div key={destination.id} className = 'DestinationCard'>
      <button className='DeleteButton' onClick={handleClick}>x</button>
      <h4>{destination.name} - {destination.country}</h4>
      <br/>
      <img className='DestinationImage' src={destination.image} alt={destination.name} />
    </div>
  )
}

export default DestinationCard;
