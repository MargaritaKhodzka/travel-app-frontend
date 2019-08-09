import React from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardBody, CardTitle, CardImg } from 'reactstrap';
import { deleteDestination } from '../actions/destinationActions';

const DestinationCard = props => {

  const {destination} = props;
  // props.destination[props.match.params.id - 1];

  const handleClick = () => {
    props.deleteDestination(destination.id);
  };

  return (
    <div className = 'DestinationCard'>
      <Card className='CardLink' tag='a' href={'/destinations/' + destination.id}>
        <CardBody>
          <Button onClick={handleClick} className='DeleteButton'>x</Button>
          <CardTitle>{destination.name} - {destination.country}</CardTitle>
        </CardBody>
        <CardImg className='DestinationImage' src={destination.image} alt={destination.name} />
      </Card>
    </div>
  );
};

export default connect(null, {deleteDestination})(DestinationCard);
