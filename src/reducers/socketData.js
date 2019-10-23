// import * as ActionTypes from '../constants/actionTypes'
import * as SocketConsts from 'constants/socket'

function socketData(state = {}, action) {
  switch (action.type) {
    case '@@socketCluster/CONNECT_SUCCESS':
      // console.log(action)
      return Object.assign({}, state, {
        isFetching: true
      })
    case SocketConsts.SOCKET_DATA_RECIEVED:
      return Object.assign({}, state, {
        isFetching: false,
        channel: action.payload.channel,
        data: action.payload.data
      })
    default:
      return state
  }
}

export default socketData