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
