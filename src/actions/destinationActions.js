export function fetchDestinations() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/destinations')
    .then(res => res.json())
    .then(destinations => dispatch({
      type: 'FETCH_DESTINATIONS',
      payload: destinations
    }))
  }
}

export function addDestination (destinationData) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/destinations', {
      method: 'POST',
			headers: {
        'content-type': 'application/json'
			},
			body: JSON.stringify(destinationData)
		})
		.then(res => res.json())
		.then(data => {
      dispatch({
        type: 'ADD_DESTINATION',
        payload: data
			})
	  })
  }
}

export function deleteDestination(destinationId) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/destinations/${destinationId}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'DELETE_DESTINATION',
        id: destinationId
      })
		})
  }
}
