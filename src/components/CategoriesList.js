import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const CategoriesList = props => {

  return (
    <div className='CategoriesList'>
      <ListGroup>
        {props.categories && props.categories.map(category =>
          <ListGroupItem key={category.id}>{category.title}</ListGroupItem>
        )}
      </ListGroup>

    </div>
  );
};

export default CategoriesList;
