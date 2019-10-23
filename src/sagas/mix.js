import {
  call,
  takeLatest,
  fork,
  select,
  put,
} from 'redux-saga/effects'
import {
  push
} from 'react-router-redux'
import {
  delay
} from 'redux-saga'
import {
  publishSocketData
} from 'actions/socket'
import * as ActionTypes from 'constants/actionTypes'
import * as MixConstants from 'constants/mix'
import * as SocketConstants from 'constants/socket'
import * as SagaConstants from 'constants/sagas'
import UserApi from '../api/UserApi'


const getUser = (state) => state.me

function* startMixConfirmationTimer(seconds) {
  for(var i = seconds; i > 0; i--) {
    yield put({
      type: ActionTypes.MIX_CONFIRMATION_TICK,
      payload: i
    })
    yield call(delay, SagaConstants.ONE_SECOND)
  }
}

function* mixConfirmation(data) {
  console.info(data)
  console.info('Mix confirmation show')
  yield call(startMixConfirmationTimer, 30)
}

function* mixCanceledByUser({
  payload
}) {
  let user = yield select(getUser)
  yield put(publishSocketData(payload.channelName, {
    action: SocketConstants.USER_CANCEL,
    uid: user.identity.id
  }))
}

function* mixConfirmedByUser({
  payload
}) {
  let user = yield select(getUser)
  yield put(publishSocketData(payload.channelName, {
    action: SocketConstants.USER_CONFIRM,
    uid: user.identity.id
  }))
}

function* mixMatchCreated({
  payload
}) {
  yield put(push('/match/' + payload.matchId))
}

function* watchConfirmation() {
  yield takeLatest(MixConstants.MIX_NEED_CONFIRMATION, mixConfirmation)
}

function* watchMixConfirmed() {
  yield takeLatest(MixConstants.MIX_WAS_CONFIRMED_BY_USER, mixConfirmedByUser)
}

function* watchMixCanceled() {
  yield takeLatest(MixConstants.MIX_WAS_CANCELED_BY_USER, mixCanceledByUser)
}

function* watchMixCreated() {
  yield takeLatest(MixConstants.MIX_MATCH_CREATED, mixMatchCreated)
}

// Non-socket
function* mixCreateSearch({
  payload
}) {
  // yield call(UserApi.mixCreateSearch, payload.formatId, payload.mode)
  let response = yield call(UserApi.mixCreateSearch, payload.formatId, payload.mode)
  yield put({
    type: MixConstants.MIX_CREATE_SEARCH_RESPONSE,
    payload: response[0]
  })
}

function* mixCancelSearch() {
  let response = yield call(UserApi.mixCancelSearch)
  yield put({
    type: MixConstants.MIX_CANCEL_SEARCH_RESPONSE,
    payload: response
  })
  yield put({
    type: ActionTypes.MY_PROFILE_REQUEST,
    payload: {
      force: true,
      profileOnly: true,
    }
  })
}

function* watchMixSearchRequest() {
  yield takeLatest(MixConstants.MIX_CREATE_SEARCH_REQUEST, mixCreateSearch)
}

function* watchMixCancelSearchRequest() {
  yield takeLatest(MixConstants.MIX_CANCEL_SEARCH_REQUEST, mixCancelSearch)
}

export default function* root() {
  yield [
    fork(watchConfirmation),
    fork(watchMixConfirmed),
    fork(watchMixCanceled),
    fork(watchMixCreated),
    // Non-socket
    fork(watchMixSearchRequest),
    fork(watchMixCancelSearchRequest),
  ]
}
