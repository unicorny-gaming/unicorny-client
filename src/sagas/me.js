import {
  takeLatest,
  fork,
  select,
  call,
  put,
} from 'redux-saga/effects'

import * as ActionTypes from 'constants/actionTypes'
import UserApi from '../api/UserApi'

const getMyIdentity = (state) => state.me.identity
// Friends
const getMyFriendsInbox = (state) => state.collections.friendsInbox
const getMyFriendsOutbox = (state) => state.collections.friendsOutbox
// Notifications
const getMyNotifications = (state) => state.me.notifications

function* fetchMyProfile({
  payload
}) {
  var profile = yield select(getMyIdentity)
  if (!profile || (payload && payload.force)) {
    profile = yield call(UserApi.getMe)
  }
  if (profile instanceof Error) {
    yield put({
      type: ActionTypes.MY_PROFILE_RESPONSE_ERROR,
      payload: profile,
      error: true
    })
  } else {
    yield put({
      type: ActionTypes.MY_PROFILE_RESPONSE,
      payload: profile
    })
    if (!payload || !payload.profileOnly) {
      yield put({
        type: ActionTypes.MY_NOTIFICATIONS_REQUEST
      })
      yield put({
        type: ActionTypes.USER_FRIENDS_REQUEST, 
        payload: { id: profile.id } 
      })
      yield put({
        type: ActionTypes.MY_FRIENDS_INBOX_REQUEST, 
        payload: { } 
      })
      yield put({
        type: ActionTypes.MY_FRIENDS_OUTBOX_REQUEST, 
        payload: { } 
      })
    }
  }
}

// Friends
function* fetchMyFriendsInbox({
  payload
}) {
  var friendsInbox = yield select(getMyFriendsInbox)
  if (!friendsInbox || (payload && payload.force)) {
    friendsInbox = yield call(UserApi.getFriendsInbox)
  }
  
  var friendsInboxList = {}
  
  if (friendsInbox && friendsInbox.length > 0) {
    friendsInbox.forEach(function(item) {
      friendsInboxList[item.id] = item;
    });  
  }
  
  yield put({
    type: ActionTypes.MY_FRIENDS_INBOX_RESPONSE,
    payload: friendsInboxList
  })
}

function* fetchMyFriendsOutbox({
  payload
}) {
  var friendsOutbox = yield select(getMyFriendsOutbox)
  if (!friendsOutbox || (payload && payload.force)) {
    friendsOutbox = yield call(UserApi.getFriendsOutbox)
  }
  
  var friendsOutboxList = {}
  
  if (friendsOutbox && friendsOutbox.length > 0) {
    friendsOutbox.forEach(function(item) {
      friendsOutboxList[item.id] = item;
    });  
  }
  
  yield put({
    type: ActionTypes.MY_FRIENDS_OUTBOX_RESPONSE,
    payload: friendsOutboxList
  })
}

function* fetchAddFriend({
  payload
}) {
  yield call(UserApi.addFriend, payload.userId)
  yield put({ type: ActionTypes.MY_FRIENDS_INBOX_REQUEST, payload: { } })
  yield put({ type: ActionTypes.MY_FRIENDS_OUTBOX_REQUEST, payload: { } })
  var profile = yield select(getMyIdentity)
  if (profile) {
    yield put({ type: ActionTypes.USER_FRIENDS_REQUEST, payload: { id: profile.id } })
  }
}

function* fetchRemoveFriend({
  payload
}) {
  yield call(UserApi.removeFriend, payload.userId)
  yield put({ type: ActionTypes.MY_FRIENDS_INBOX_REQUEST, payload: { } })
  yield put({ type: ActionTypes.MY_FRIENDS_OUTBOX_REQUEST, payload: { } })
  var profile = yield select(getMyIdentity)
  if (profile) {
    yield put({ type: ActionTypes.USER_FRIENDS_REQUEST, payload: { id: profile.id } })
  }
}

function* watchMyProfileRequest() {
  yield takeLatest(ActionTypes.MY_PROFILE_REQUEST, fetchMyProfile)
}

// Notifications
function* fetchMyNotifications(
  // { payload }
) {
  let notifications = yield call(UserApi.getMyNotifications)
  if (notifications instanceof Error) {
    yield put({
      type: ActionTypes.MY_NOTIFICATIONS_RESPONSE_ERROR,
      payload: notifications,
      error: true
    })
  } else {
    yield put({
      type: ActionTypes.MY_NOTIFICATIONS_RESPONSE,
      payload: notifications
    })
  }
}

function* readMyNotifications({
  payload
}) {
  if (!payload) {
    let notifications = yield select(getMyNotifications)
    payload = notifications.filter((item) => {
      return item.is_active
    })
  }
  let notificationsToSend = payload.map((item) => {
    return item.id
  })
  if (notificationsToSend.length > 0) {
    yield call(UserApi.markNotificationsAsRead, notificationsToSend)
  }
}

// Friends
function* watchMyFriendsInboxRequest() {
  yield takeLatest(ActionTypes.MY_FRIENDS_INBOX_REQUEST, fetchMyFriendsInbox)
}

function* watchMyFriendsOutboxRequest() {
  yield takeLatest(ActionTypes.MY_FRIENDS_OUTBOX_REQUEST, fetchMyFriendsOutbox)
}

function* watchAddFriendRequest() {
  yield takeLatest(ActionTypes.ADD_FRIEND_REQUEST, fetchAddFriend)
}

function* watchRemoveFriendRequest() {
  yield takeLatest(ActionTypes.REMOVE_FRIEND_REQUEST, fetchRemoveFriend)
}


// Notifications

function* watchMyNotificationsRequest() {
  yield takeLatest(ActionTypes.MY_NOTIFICATIONS_REQUEST, fetchMyNotifications)
}

function* watchMyNotificationsReadRequest() {
  yield takeLatest(ActionTypes.MY_NOTIFICATIONS_READ_REQUEST, readMyNotifications)
}

function* watchNotificationsCloseRequest() {
  yield takeLatest(ActionTypes.SYSTEM_CLOSE_NOTIFICATIONS, readMyNotifications)
}

export default function* root() {
  yield [
    fork(watchMyProfileRequest),
    // Friends
    fork(watchMyFriendsInboxRequest),
    fork(watchMyFriendsOutboxRequest),
    fork(watchAddFriendRequest),
    fork(watchRemoveFriendRequest),
    // Notifications
    fork(watchMyNotificationsRequest),
    fork(watchMyNotificationsReadRequest),
    fork(watchNotificationsCloseRequest),
  ]
}
