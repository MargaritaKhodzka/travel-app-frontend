import React from 'react';
import CategoryInput from '../components/CategoryInput';
import CategoriesList from '../components/CategoriesList';

class Categories extends React.Component {

  render() {
    return (
      <div>
        <CategoryInput destination={this.props.destination} />
        <CategoriesList categories={this.props.destination && this.props.destination.categories} />
      </div>
    );
  }
};


export default Categories;
