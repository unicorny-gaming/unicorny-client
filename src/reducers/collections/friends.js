import * as ActionTypes from 'constants/actionTypes'

function friends(state = [], action) {
  switch (action.type) {
    case ActionTypes.USER_FRIENDS_RESPONSE:      
      var newState = state.slice();
      newState[action.payload.id] = action.payload.friends
      return newState
    default:
      return state
  }
}

export default friends