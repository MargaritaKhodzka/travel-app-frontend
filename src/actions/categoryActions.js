export const fetchCategories = () => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/categories/${destinationId}/categories`)
    .then(res => res.json())
    .then(categories => dispatch({
      type: 'FETCH_CATEGORIES',
      payload: categories
    }))
  };
};
