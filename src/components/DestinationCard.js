import React from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardBody, CardTitle, CardImg } from 'reactstrap';
import { deleteDestination } from '../actions/destinationActions';

const DestinationCard = props => {

  let destination = props.match ? props.destinations[props.match.params.id - 1] : props.destination;

  const handleClick = () => {
    props.deleteDestination(destination.id);
  };

  return (
    <div className = 'DestinationCard'>
      <Card>
        <CardBody>
          <Button onClick={handleClick} className='DeleteButton'>x</Button>
          <CardTitle>{destination && destination.name} - {destination && destination.country}</CardTitle>
        </CardBody>
        <CardImg className='DestinationImage' src={destination && destination.image} alt={destination && destination.name} />
      </Card>
    </div>
  );
};

export default connect(null, {deleteDestination})(DestinationCard);
