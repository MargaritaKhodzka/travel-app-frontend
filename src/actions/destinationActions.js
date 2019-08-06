export const fetchDestinations = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/destinations')
    .then(res => res.json())
    .then(destinations => dispatch({
      type: 'FETCH_DESTINATIONS',
      payload: destinations
    }))
  };
};

export const addDestination = destinationData => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/destinations', {
      method: 'POST',
			headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
			body: JSON.stringify(destinationData)
		})
		.then(res => res.json())
		.then(destination => {
      dispatch({type: 'ADD_DESTINATION', payload: destination})
	  })
  };
};

export const deleteDestination = destinationId => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/destinations/${destinationId}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(destination => {
      dispatch({type: 'DELETE_DESTINATION', id: destinationId})
    })
  }
}
