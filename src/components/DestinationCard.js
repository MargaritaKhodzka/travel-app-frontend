import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardFooter } from 'reactstrap';

const DestinationCard = props => {

  let destination = props.match ? props.destinations[props.match.params.id - 1] : props.destination;

  return (
    <div>
      <Card className = 'DestinationCard'>
        <CardBody>
          <CardTitle>{destination && destination.name} - {destination && destination.country}</CardTitle>
          <CardImg className='DestinationImage' src={destination && destination.image} alt={destination && destination.name} />
        </CardBody>

        <CardFooter>
          {destination && destination.categories.map(category =>
            category.title + ' '
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default DestinationCard;
