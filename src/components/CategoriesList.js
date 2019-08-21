import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { deleteCategory } from '../actions/categoryActions';

const CategoriesList = props => {

  const handleDelete = (category) => {
    props.deleteCategory(category.id, category.destination_id)
  }

  return (
    <div className='CategoriesList'>
      {props.categories && props.categories.length === 0 ? <h6>There are no categories in this location yet</h6> : <h5>Categories in this location</h5>}
      <ListGroup>
        {props.categories && props.categories.map(category =>
          <ListGroupItem key={category.id}>{category.title}<Button onClick={() => handleDelete(category)} className='DeleteButton'>x</Button></ListGroupItem>
        )}
      </ListGroup>
    </div>
  );
};

export default connect(null, { deleteCategory })(CategoriesList);
