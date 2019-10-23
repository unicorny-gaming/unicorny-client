import {
  takeLatest,
  fork,
} from 'redux-saga/effects'

import * as ActionTypes from 'constants/actionTypes'


function* madeUserAuth({
  payload
}) {
  yield sessionStorage.setItem(Config.tokenName, payload.key)
  var redirectTo = payload.to || '/'
  window.location.href = redirectTo
}

function* watchUserAuth() {
  yield takeLatest(ActionTypes.USER_AUTH, madeUserAuth)
}


export default function* root() {
  yield [
    fork(watchUserAuth),
  ]
}
