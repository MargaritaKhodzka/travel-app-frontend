import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
import Categories from '../containers/Categories';
import { deleteDestination } from '../actions/destinationActions';


const DestinationCard = props => {

  let destination = props.match ? props.destinations[props.match.params.id - 1] : props.destination;

  const handleClick = () => {
    props.deleteDestination(destination.id);
    const path = `/destinations`;
    props.history.push(path);
  };

  return (
    <div>
      <Card className = 'DestinationShow'>
        <CardBody>
          <Button onClick={handleClick} className='DeleteButton'>x</Button>
          <CardTitle>{destination && destination.name} - {destination && destination.country}</CardTitle>
          <CardImg className='DestinationImage' src={destination && destination.image} alt={destination && destination.name} />
        </CardBody>
      </Card>

      <Categories destination={destination} />
    </div>
  );
};

export default connect(null, {deleteDestination})(DestinationCard);
