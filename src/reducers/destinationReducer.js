const destinationReducer = (state = {destinations: []}, action) => {

  switch (action.type) {

    case 'FETCH_DESTINATIONS':
      return {destinations: action.payload}

    case 'ADD_DESTINATION':
      const destination = {
        id: action.payload.id,
        name: action.payload.name,
        country: action.payload.country
      }
      return {...state, destinations: [...state.destinations, destination]}

    default:
      return state;
  }
}

export default destinationReducer;
