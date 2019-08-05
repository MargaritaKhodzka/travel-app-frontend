export function fetchDestinations() {
  //thunk function, passing in built in dispatch fn
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
