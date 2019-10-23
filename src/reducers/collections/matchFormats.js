import * as ActionTypes from 'constants/actionTypes'

function matchFormats(state = [], action) {
  switch (action.type) {
    case ActionTypes.MATCH_FORMATS_RESPONSE:
      return action.payload
    default:
      return state
  }
}

export default matchFormats