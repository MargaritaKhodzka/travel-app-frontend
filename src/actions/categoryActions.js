export const addCategory = (category, destinationId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/destinations/${destinationId}/categories`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(category)
    })
    .then(res => res.json())
    .then(destination => {
      dispatch({type: 'ADD_CATEGORY', payload: destination})
    })
  };
};

export const deleteCategory = (categoryId, destinationId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/destinations/${destinationId}/categories/${categoryId}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(destination =>
      dispatch({type: 'DELETE_CATEGORY', payload: destination})
    )
  };
};
