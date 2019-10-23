import * as ActionTypes from 'constants/actionTypes'

function commentSended(state = false, action) {
  switch (action.type) {
    case ActionTypes.COMMENTS_ADD_RESPONSE:
      return action.payload
    default:
      return state
  }
}

export default commentSended