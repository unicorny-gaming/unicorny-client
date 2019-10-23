import * as ActionTypes from 'constants/actionTypes'

function friendsOutbox(state = {}, action) {
  switch (action.type) {
    case ActionTypes.MY_FRIENDS_OUTBOX_RESPONSE:      
      return action.payload
    default:
      return state
  }
}

export default friendsOutbox