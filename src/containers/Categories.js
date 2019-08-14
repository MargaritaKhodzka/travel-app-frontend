import React from 'react';

import CategoryInput from '../components/CategoryInput';
import CategoriesList from '../components/CategoriesList';

class Categories extends React.Component {

  render() {
    return (
      <div>
        <CategoryInput />
        <CategoriesList />
      </div>
    );
  }
};


export default Categories;
