import * as ActionTypes from 'constants/actionTypes'

function friendsInbox(state = {}, action) {
  switch (action.type) {
    case ActionTypes.MY_FRIENDS_INBOX_RESPONSE:  
      return action.payload
    default:
      return state
  }
}

export default friendsInbox