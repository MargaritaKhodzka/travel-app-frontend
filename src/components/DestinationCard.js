import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import Categories from '../containers/Categories';

const DestinationCard = props => {

  let destination = props.match ? props.destinations[props.match.params.id - 1] : props.destination;

  return (
    <div>
      <Card className = 'DestinationShow'>
        <CardBody>
          <CardTitle>{destination && destination.name} - {destination && destination.country}</CardTitle>
          <CardImg className='DestinationImage' src={destination && destination.image} alt={destination && destination.name} />
        </CardBody>
      </Card>

      <Categories />
    </div>
  );
};

export default DestinationCard;
