import * as ActionTypes from 'constants/actionTypes'

function matches(state = [], action) {
  var newState
  switch (action.type) {
    case ActionTypes.MATCH_RESPONSE:
      newState = state.slice();
      newState[action.payload.id] = action.payload
      return newState
    case ActionTypes.MATCHES_RESPONSE:
      newState = state.slice();
      for(var i = 0; i < action.payload.length; i++) {
        var match = action.payload[i]
        newState[match.id] = match
      }
      return newState
    default:
      return state
  }
}

export default matches