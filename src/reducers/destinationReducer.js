const destinationReducer = (state = {destinations: []}, action) => {

  switch (action.type) {

    case 'FETCH_DESTINATIONS':
      return {destinations: action.payload};

    case 'ADD_DESTINATION':
      return {...state, destinations: [...state.destinations, action.payload]};

    case 'DELETE_DESTINATION':
      const filteredDestinations = state.destinations.filter(destination => destination.id !== action.id)
      return {...state, filteredDestinations}

    case 'TOGGLE_VISITED':
      const visitDestination = state.destinations.map(destination => {
        if (destination.id !== action.payload.id) {
          return destination
        } else {
          return action.payload
        }
      })
      return {...state, destinations: visitDestination}

    case 'TOGGLE_BUCKET_LIST':
      const bucketListDestination = state.destinations.map(destination => {
        if (destination.id !== action.payload.id) {
          return destination
        } else {
          return action.payload
        }
      })
      return {...state, destinations: bucketListDestination}

    case 'ADD_CATEGORY':
      const addCategoryDestination = state.destinations.map(destination => {
        if (destination.id === action.payload.id) {
          return action.payload
        } else {
          return destination
        }
      })
      return {...state, destinations: addCategoryDestination}

    case 'DELETE_CATEGORY':
      const deleteCategoryDestination = state.destinations.map(destination => {
        if (destination.id === action.payload.id) {
          return action.payload
        } else {
          return destination
        }
      })
      return {...state, destinations: deleteCategoryDestination}

    default:
      return state;
  }
}

export default destinationReducer;
