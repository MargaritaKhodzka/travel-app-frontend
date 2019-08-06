import React from 'react';
import { connect } from 'react-redux';
import { addDestination } from '../actions/destinationActions';

class DestinationInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      country: '',
      image: ''
    };
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addDestination(this.state);
    this.setState({
      name: '',
      country: '',
      image: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Add a New Destination</h3>

          <label>Name:</label>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br/>

          <label>Country:</label>
          <input type='text' name='country' value={this.state.country} onChange={this.handleChange} /><br/>

          <label>Image:</label>
          <input type='text' name='image' value={this.state.image} onChange={this.handleChange} /><br/><br/>

          <button>Add Destination</button><br/><br/>
        </form>
      </div>
    );
  }
};

export default connect(null, {addDestination})(DestinationInput);
