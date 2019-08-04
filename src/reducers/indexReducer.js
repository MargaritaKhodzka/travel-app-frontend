const indexReducer = (state = {destinations: []}, action) => {
  // checking that action is coming in correctly and
  // the store is updated by reducer
  return action.payload;
}

export default indexReducer;
