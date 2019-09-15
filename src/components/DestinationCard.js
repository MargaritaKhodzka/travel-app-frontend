import React from 'react';
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';

class DestinationCard extends React.Component {

  state = {
    likes: 0
  }

  countLikes = () =>  {
    this.setState ({
      likes: this.state.likes + 1
    })
  }

  callApi = () => {
    fetch(`http://localhost:3000/api/v1/destinations/1`)
      .then(res => res.json())
      .then(destination => console.log(destination))
  }

  render () {
    let {destination} = this.props
    return (
      <Card className = 'DestinationCard'>
        <CardBody>
          <CardTitle>{destination.name} - {destination.country}</CardTitle>
          <CardImg className='DestinationImage' src={destination.image} alt={destination.name} />
          <Button onClick={this.countLikes}>Like: {this.state.likes}</Button>
          <Button onClick={this.callApi}>Call API</Button>
        </CardBody>
      </Card>
    )
  }


}

export default DestinationCard;
