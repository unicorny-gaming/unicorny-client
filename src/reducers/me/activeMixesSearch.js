import * as MixesTypes from 'constants/mix'
import * as ActionTypes from 'constants/actionTypes'

function activeMixesSearch(state = null, action) {
  switch (action.type) {
    case ActionTypes.MY_PROFILE_RESPONSE:
      return action.payload.activeMixesSearch
    case MixesTypes.MIX_CREATE_SEARCH_RESPONSE:
      return action.payload
    default:
      return state
  }
}

export default activeMixesSearch