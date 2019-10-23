import * as ActionTypes from 'constants/actionTypes'

function users(state = [], action) {
  var newState = state.slice();
  switch (action.type) {
    case ActionTypes.USER_PROFILE_RESPONSE:
      newState[action.payload.id] = action.payload
      return newState
    case ActionTypes.USER_PROFILE_MATCHES_RESPONSE:
      var newSteamUser = Object.assign({}, newState[action.payload.id], {
        matches: action.payload.matches
      })
      newState[action.payload.id] = newSteamUser
      return newState
    default:
      return state
  }
}

export default users