import React from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardBody, CardTitle } from 'reactstrap';
import { deleteDestination } from '../actions/destinationActions';

const DestinationCard = props => {

  const destination = props.destinations[props.match.params.id - 1];

  const handleClick = () => {
     props.deleteDestination(destination.id);
   };

  return (
    <div className = 'DestinationCard'>
      <Card>
        <CardBody>
          <Button onClick={handleClick} className='DeleteButton'>x</Button>
          <CardTitle>{destination ? destination.name : null} - {destination ? destination.country : null}</CardTitle>
        </CardBody>
        <img className='DestinationImage' src={destination ? destination.image : null} alt={destination ? destination.name : null} />
      </Card>
    </div>
  );
};

export default connect(null, {deleteDestination})(DestinationCard);
