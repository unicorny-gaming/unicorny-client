import * as ActionTypes from 'constants/actionTypes'

function identity(state = null, action) {
  switch (action.type) {
    case ActionTypes.MY_PROFILE_RESPONSE:
      return action.payload
    default:
      return state
  }
}

export default identity