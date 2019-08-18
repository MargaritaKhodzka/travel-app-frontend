import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const CategoriesList = props => {

  return (
    <div className='CategoriesList'>
      {props.categories && props.categories.length === 0 ? <h6>There are no categories in this location yet</h6> : <h5>Categories in this location</h5>}
      <ListGroup>
        {props.categories && props.categories.map(category =>
          <ListGroupItem key={category.id}>{category.title}</ListGroupItem>
        )}
      </ListGroup>
    </div>
  );
};

export default CategoriesList;
