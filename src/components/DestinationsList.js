import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Button, CardBody, CardTitle, CardImg } from 'reactstrap';
import { deleteDestination } from '../actions/destinationActions';


const DestinationsList = props => {

  let destination = props.destination;

  const handleClick = () => {
    props.deleteDestination(destination.id);
  };

  return (
    <div className='DestinationContainer'>

      <div>
        <Link to='/destinations/new' className='NewDestinationButton' role='button'>Add A New Destination</Link>
      </div>

      <h3>Destinations</h3>
      {props.destinations.map(destination =>
        <Link key={destination.id} to={`/destinations/${destination.id}`}>
          <Card className = 'DestinationCard'>
            <CardBody>
              <Button onClick={handleClick} className='DeleteButton'>x</Button>
              <CardTitle>{destination.name} - {destination.country}</CardTitle>
              <CardImg className='DestinationImage' src={destination.image} alt={destination.name} />
            </CardBody>
          </Card>
        </Link>
      )}
    </div>
  );
};

export default connect(null, {deleteDestination})(DestinationsList);
