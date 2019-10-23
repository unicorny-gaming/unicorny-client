import * as ActionTypes from 'constants/actionTypes'

function notifications(state = [], action) {
  switch (action.type) {
    case ActionTypes.MY_NOTIFICATIONS_RESPONSE:
      return action.payload
    case ActionTypes.SYSTEM_CLOSE_NOTIFICATIONS:
      return state.map((item) => {
        // We can close only one notification per click
        var _item = Object.assign({}, item)
        if (_item.id == action.payload[0].id) {
          _item.is_active = false
        }
        return _item
      })
    default:
      return state
  }
}

export default notifications
