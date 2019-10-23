import * as ActionTypes from 'constants/actionTypes'
import * as MixStatuses from 'constants/mix'

function mix(state = {
  isFetching: false,
  status: MixStatuses.MIX_STATUS_AVAILABLE
}, action) {
  switch (action.type) {
    case ActionTypes.MIX_SEARCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case ActionTypes.MIX_SEARCH_RESPONSE:
      return Object.assign({}, state, {
        isFetching: false,
        status: action.payload.status,
        lastUpdated: action.receivedAt
      })
    case MixStatuses.MIX_NEED_CONFIRMATION:
      return Object.assign({}, state, {
        prematch: Object.assign({}, action.payload, {
          needConfirmation: true,
          confirmed: false,
          confirmedCount: 0,
          timer: 30,
        }),
      })
    case MixStatuses.MIX_WAS_CANCELED_BY_USER:
      return Object.assign({}, state, {
        prematch: null
      })
    case MixStatuses.MIX_MATCH_CREATED:
      return Object.assign({}, state, {
        prematch: null
      })
    case MixStatuses.MIX_WAS_CANCELED:
      return Object.assign({}, state, {
        prematch: null
      })
    case MixStatuses.MIX_WAS_CONFIRMED_BY_USER:
      return Object.assign({}, state, {
        prematch: Object.assign({}, state.prematch, {
          confirmed: true,
          needConfirmation: false,
          confirmedCount: state.prematch.confirmedCount + 1
        })
      })
    case ActionTypes.MIX_CONFIRMATION_TICK:
      return Object.assign({}, state, {
        prematch: Object.assign({}, state.prematch, {
          timer: action.payload
        })
      })
    case MixStatuses.MIX_STATUS_UPDATE:
      return Object.assign({}, state, {
        prematch: Object.assign({}, state.prematch, {
          confirmedCount: action.payload.data.confirmed,
          totalCount: action.payload.data.total
        })
      })
    default:
      return state
  }
}

export default mix
