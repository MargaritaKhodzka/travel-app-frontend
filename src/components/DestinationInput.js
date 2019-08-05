import React from 'react';
import { connect } from 'react-redux';
import { addDestination } from '../actions/fetchDestinations';

class DestinationInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      country: '',
      image: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const destination = {
      name: this.state.name,
      country: this.state.country,
      image: this.state.image
    }

    this.props.addDestination(destination);

    this.setState({
      name: '',
      country: '',
      image: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h3>Add a New Destination</h3>

          <label>Name:</label>
          <input type='text' name='name' value={this.state.name} onChange={(e) => this.handleChange(e)} /><br/>

          <label>Country:</label>
          <input type='text' name='country' value={this.state.country} onChange={(e) => this.handleChange(e)} /><br/>

          <label>Image:</label>
          <input type='text' name='image' value={this.state.image} onChange={(e) => this.handleChange(e)} /><br/><br/>

          <button>Add Destination</button><br/><br/>
        </form>
      </div>
    )
  }
}

export default connect(null, {addDestination})(DestinationInput);
