import * as ActionTypes from 'constants/actionTypes'

function comments(state = {}, action) {
  switch (action.type) {
    case ActionTypes.COMMENTS_LIST_RESPONSE:
      var NAME = action.payload.modelName + "/" + action.payload.id
      return Object.assign({}, state, {
          [NAME]: action.payload.comments
        })
    default:
      return state
  }
}

export default comments