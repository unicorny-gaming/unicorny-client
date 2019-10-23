import {
  takeLatest,
  takeEvery,
  fork,
  select,
  call,
  put,
} from 'redux-saga/effects'

import * as ActionTypes from 'constants/actionTypes'
import UserApi from '../api/UserApi'

const getUsers = (state) => state.collections.users
const getUserFriends = (state) => state.collections.friends

function* fetchUser({
  payload
}) {
  let users = yield select(getUsers)
  var user = users[payload.id]
  if (!user || payload.force) {
    user = yield call(UserApi.getUserProfile, payload.id)
  }
  yield put({
    type: ActionTypes.USER_PROFILE_RESPONSE,
    payload: user
  })
}

function* fetchUserFriends({
  payload
}) {
  let friendsCollection = yield select(getUserFriends)
  var friends = friendsCollection[payload.id]

  // Dont change anything if not needed
  if (friends && !payload.force) {
    return
  }

  // Or made request
  friends = yield call(UserApi.getFriends, payload.id)
  var friendsList = {}
  
  if (friends && friends.length > 0) {
    friends.forEach(function(item) {
      friendsList[item.id] = item;
    })
  }
  
  yield put({
    type: ActionTypes.USER_FRIENDS_RESPONSE,
    payload: {
      id: payload.id,
      friends: friendsList
    }
  })
}

function* fetchUserMatches({
  payload
}) {
  let matches = yield call(UserApi.getUserMatches, payload.id)
  yield put({
    type: ActionTypes.USER_PROFILE_MATCHES_RESPONSE,
    payload: {
      id: payload.id,
      matches: matches
    }
  })
}

function* watchUserProfileRequest() {
  yield takeEvery(ActionTypes.USER_PROFILE_REQUEST, fetchUser)
}

function* watchUserFriendsRequest() {
  yield takeEvery(ActionTypes.USER_FRIENDS_REQUEST, fetchUserFriends)
}

function* watchUserMatchesRequest() {
  yield takeLatest(ActionTypes.USER_PROFILE_MATCHES_REQUEST, fetchUserMatches)
}

export default function* root() {
  yield [
    fork(watchUserProfileRequest),
    fork(watchUserFriendsRequest),
    fork(watchUserMatchesRequest),
  ]
}
