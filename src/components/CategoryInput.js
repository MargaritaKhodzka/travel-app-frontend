import React from 'react';
import { connect } from 'react-redux';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addCategory } from '../actions/categoryActions';

class CategoryInput extends React.Component {

  state = {
    title: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCategory(this.state, this.props.destination.id);
    this.setState({
      title: ''
    });
  };

  render() {
    return (
      <div className='CategoryForm'>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <h5>Add a New Category</h5>
          </FormGroup>

          <FormGroup row>
            <Label for='title' sm={2}>Title</Label>
            <Col md={10}>
              <Input type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
            </Col>
          </FormGroup>

          <Button>Add Category</Button>
        </Form>
      </div>
    );
  }
};

export default connect(null, { addCategory })(CategoryInput);
