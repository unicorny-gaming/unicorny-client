import uuid from 'uuid/v1'
import * as ActionTypes from 'constants/actionTypes'
import * as MixConstants from 'constants/mix'

function pushAlert(state, alert) {
  alert.id = uuid()
  var _newState = state.slice()
  _newState.push(alert)
  return _newState
}

function popAlert(state, alert) {
  return state.filter(function(item) {
    return item.id !== alert.id
  })
}

function alerts(state = [], action) {
  switch (action.type) {
    case ActionTypes.MY_PROFILE_RESPONSE:
      return pushAlert(state, {
        type: 'info',
        message: `Привет, ${action.payload.username}!\nДобро пожаловать на обновленный DSZone.ru`
      })
    // case ActionTypes.MY_PROFILE_RESPONSE_ERROR:
    //   return pushAlert(state, {
    //     // type: 'warning',
    //     type: 'success',
    //     message: 'Для использования всех возможностей сайта авторизуйтесь.'
    //   })
    case MixConstants.MIX_CREATE_SEARCH_RESPONSE:
      return pushAlert(state, {
        type: 'success',
        message: 'Запрос на поиск миксов отправлен'
      })
    case ActionTypes.SYSTEM_CLOSE_ALERT:
      return popAlert(state, action.payload)
    default:
      return state
  }
}

export default alerts
