import {
  takeLatest,
  fork,
  select,
  call,
  put,
} from 'redux-saga/effects'

import * as ActionTypes from 'constants/actionTypes'
import UserApi from '../api/UserApi'

const getCommentsList = (state) => state.collections.comments

function* fetchCommentsList({
  payload
}) {
  let commentsList = yield select(getCommentsList)
  var commentsModel = commentsList[payload.modelName]
  if (!commentsModel || (payload && payload.force)) {
    comments = yield call(UserApi.getComments, payload.modelName, payload.id)
  } else {
    var comments = commentsModel[payload.id]
    if (!comments) {
      comments = yield call(UserApi.getComments, payload.modelName, payload.id)
    }
  }
  yield put({
    type: ActionTypes.COMMENTS_LIST_RESPONSE,
    payload: {
      modelName: payload.modelName,
      id: payload.id,
      comments: comments
    }
  })
}

function* addComment({
  payload
}) {
  let comment = yield call(UserApi.addComment, payload.modelName, payload.modelId, payload.content)
  if (comment instanceof Error) {
    yield put({
      type: ActionTypes.COMMENTS_ADD_ERROR,
      payload: comment,
      error: true
    })
  } else {
    yield put({
      type: ActionTypes.COMMENTS_ADD_RESPONSE,
      payload: comment
    })
    yield put({
      type: ActionTypes.COMMENTS_LIST_REQUEST,
      payload: {
        modelName: payload.modelName,
        id: payload.modelId
      }
    })
  }
}

function* watchCommentAddRequest() {
  yield takeLatest(ActionTypes.COMMENTS_ADD_REQUEST, addComment)
}

function* watchCommentsListRequest() {
  yield takeLatest(ActionTypes.COMMENTS_LIST_REQUEST, fetchCommentsList)
}

export default function* root() {
  yield [
    fork(watchCommentAddRequest),
    fork(watchCommentsListRequest),
  ]
}
