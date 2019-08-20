import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const BucketList = props => {

  return (
    <div className='DestinationContainer'>
      <h3>Destinations in your Bucket List</h3>

      {props.destinations.map(destination => {
        if (destination.bucket_list === true) {
          return (
            <Card key={destination.id} className = 'DestinationCard'>
              <CardBody>
                <CardTitle>{destination.name} - {destination.country}</CardTitle>
                <CardImg className='DestinationImage' src={destination.image} alt={destination.name} />
              </CardBody>
            </Card>
          )
        } else {
          return (
            null
          )
        }
      })}
    </div>
  );
};

export default BucketList;
