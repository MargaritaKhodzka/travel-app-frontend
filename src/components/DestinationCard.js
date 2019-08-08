import React from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardBody, CardTitle } from 'reactstrap';
import { deleteDestination } from '../actions/destinationActions';

const DestinationCard = props => {

  const {destination} = props;

  const handleClick = () => {
    props.deleteDestination(destination.id);
  };

  return (
    <div key={destination.id} className = 'DestinationCard'>
      <Card tag='a' href={'/destinations/' + destination.id}>
        <CardBody>
          <Button onClick={handleClick} className='DeleteButton'>x</Button>
          <CardTitle>{destination.name} - {destination.country}</CardTitle>
        </CardBody>
        <img className='DestinationImage' src={destination.image} alt={destination.name} />
      </Card>
    </div>
  );
};

export default connect(null, {deleteDestination})(DestinationCard);