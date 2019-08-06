import React from 'react';
import { connect } from 'react-redux';
import DestinationCard from './DestinationCard';
import './Destinations.css'

const DestinationsList = props => {

  return (
    <div className='DestinationContainer'>
      <h3>Destinations</h3>
      {props.destinations.map(destination => <DestinationCard key={destination.id} destination={destination} delete={props.delete}/>)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    destinations: state.destinations
  }
}

export default connect(mapStateToProps)(DestinationsList);
