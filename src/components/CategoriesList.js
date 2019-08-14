import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const CategoriesList = () => {

  return (
    <div className='CategoriesList'>
      <ListGroup>
        <ListGroupItem>Category 1</ListGroupItem>
        <ListGroupItem>Category 2</ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default CategoriesList;
