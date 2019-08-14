const categoryReducer = (state = {category: {id: '', title: '', destination_id: ''}}, action) => {

  switch (action.type) {

    case 'FETCH_CATEGORIES':
      return {categories: action.payload};

    default:
      return state;
  }
}

export default categoryReducer;
