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
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(destination => {
      dispatch({type: 'DELETE_DESTINATION', id: destinationId})
    })
  };
};

export const toggleVisited = (destination, destinationId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/destinations/${destinationId}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(destination)
    })
    .then(res => res.json())
    .then(destination => {
      dispatch({type: 'TOGGLE_VISITED', id: destinationId})
    })
  };
};

export const toggleBucketList = (destination, destinationId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/destinations/${destinationId}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(destination)
    })
    .then(res => res.json())
    .then(destination => {
      dispatch({type: 'TOGGLE_BUCKET_LIST', id: destinationId})
    })
  };
};
