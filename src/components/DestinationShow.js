import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
import Categories from '../containers/Categories';
import { deleteDestination, toggleVisited } from '../actions/destinationActions';


const DestinationShow = props => {

  let destination = props.destinations.filter(destination => destination.id == props.match.params.id)[0];

  const handleClick = () => {
    props.deleteDestination(destination.id);
    const path = `/destinations`;
    props.history.push(path);
  };

  const handleVisited = (destinationId, visitedStatus) => {
    props.toggleVisited(destinationId, visitedStatus)
  }

  return (
    <div>
      <Card className = 'DestinationShow'>
        <CardBody>
          <Button onClick={handleClick} className='DeleteButton'>x</Button>
          <CardTitle>{destination && destination.name} - {destination && destination.country}</CardTitle>
          <CardImg className='DestinationImage' src={destination && destination.image} alt={destination && destination.name} />
        </CardBody>
        <Button
          onClick={handleVisited}
          className='VisitedButton'
          style={{text: destination && destination.visited ? 'Visited' : 'Add to Visited'}}>
          Add to Visited
        </Button>
        <Button className='BucketListButton'>Add to Bucket List</Button>
      </Card>

      <Categories destination={destination} />
    </div>
  );
};

export default connect(null, {deleteDestination, toggleVisited})(DestinationShow);
