import {
    takeEvery,
    takeLatest,
    select,
    fork,
    call,
} from 'redux-saga/effects'
import {
  delay
} from 'redux-saga'
import socketCluster from 'socketcluster-client'
import * as SocketConstants from 'constants/socket'
import * as ActionTypes from 'constants/actionTypes'
import * as MixStatuses from 'constants/mix'
import * as SagaConstants from 'constants/sagas'

import {
    recieveSocketData
} from 'actions/socket'
import {
    cancelMixConfirmation,
} from 'actions/mix'

let socket
// TODO: Rewrite dispatch -> put
let dispatch
const getMe = (state) => state.me

export const hocOptions = {
    socketCluster: socketCluster,
    onConnect: function (options, hocOptions, _socket) {
        if (_socket && _socket.id) {
            socket = _socket;
        }
    }
}

function destroyChannel(channel) {
    console.info('Channel ' + channel.name + ' was destoyed')
    channel.destroy()
}

function processSocketData(channel, recievedData) {
    // Just logging
    dispatch(recieveSocketData(channel.name, recievedData.data))

    // Processing
    switch (recievedData.action) {
        case SocketConstants.MATCH_CONFIRMATION:
            subscribeToChannel(recievedData.data.channelName)
            dispatch({
              type: MixStatuses.MIX_NEED_CONFIRMATION,
              payload: recievedData.data
            })
            break
        case SocketConstants.MATCH_CANCEL:
            dispatch(cancelMixConfirmation(...recievedData.data, channel.name))
            destroyChannel(channel)
            break
        case SocketConstants.USERS_CONFIRMATION_STATUS:
            dispatch({
                type: MixStatuses.MIX_STATUS_UPDATE,
                payload: {
                    channelName: channel.name,
                    data: recievedData.data
                }
            })
            break
        case SocketConstants.MATCH_CREATED:
            dispatch({ type: MixStatuses.MIX_MATCH_CREATED, payload: recievedData.data })
            break
        case SocketConstants.MATCH_CHANGED:
          dispatch({
            type: ActionTypes.MATCH_REQUEST,
            payload: {
              id: recievedData.payload.matchId,
              force: true
            }
          })
          break
        default:
            break
    }
}

function subscribeToChannel(channelName) {
    console.info('Subscribed to ' + channelName)
    let channel = socket.subscribe(channelName)
    channel.watch(function (data) {
        console.info('Channel ' + channelName + ' data:')
        console.info(data)
        processSocketData(channel, data)
    })
    return channel
}

function* socketConnected() {
    let me = yield select(getMe)
    if (socket && socket.id && !me.isFetching && me.identity && me.identity.id) {
      console.info("Socket is " + socket.id);
      subscribeToChannel('user' + me.identity.id)
    }
}

function* socketEmit({ payload } ) {
    let { eventId, data } = payload
    yield socket.emit(eventId, data)
}

function* socketPublish({ payload }) {
    let { channelName, data } = payload
    yield socket.publish(channelName, data)
}

function* socketDisconnect() {
  yield call(delay, 5 * SagaConstants.ONE_SECOND)
  if (socket) {
    socket.disconnect()
  }
}

function* socketDisconnected() {
  console.log('Socket disconnected =(')
  let me = yield select(getMe)
  if (me.identity) {
    console.log('Trying to reconnect...')
    if (socket) {
        socket.connect()
    } else {
        yield call(delay, 5000)
        yield call(socketConnected)
    }
  }
}

function* watchConnect() {
    yield takeLatest(SocketConstants.CONNECT_SUCCESS, socketConnected)
}

function* watchDisconnect() {
    yield takeLatest(SocketConstants.DISCONNECT, socketDisconnected)
}

function* watchErrors() {
    yield [
        takeLatest(SocketConstants.AUTH_ERROR, socketDisconnect),
        takeLatest(SocketConstants.CONNECT_ERROR, socketDisconnect),
        takeLatest(ActionTypes.MY_PROFILE_RESPONSE_ERROR, socketDisconnect),
    ]
}

function* watchSocketEmit() {
    yield takeEvery(SocketConstants.SOCKET_DATA_EMIT, socketEmit)
}

function* watchSocketPublish() {
    yield takeEvery(SocketConstants.SOCKET_DATA_PUBLISH, socketPublish)
}

function* watchMyProfileResponse() {
  yield takeLatest(ActionTypes.MY_PROFILE_RESPONSE, socketConnected)
}

export default function* root(_dispatch) {
  dispatch = _dispatch
  yield [
      fork(watchConnect),
      fork(watchDisconnect),
      fork(watchErrors),
      fork(watchSocketEmit),
      fork(watchSocketPublish),
      // Additional events
      fork(watchMyProfileResponse)
  ]
}
