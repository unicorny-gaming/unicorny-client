import {
    takeEvery,
    takeLatest,
    fork,
    call,
    select,
    put,
} from 'redux-saga/effects'
import * as ActionTypes from 'constants/actionTypes'
import UserApi from '../api/UserApi'

const getMatches = (state) => state.collections.matches
const getMatchFormats = (state) => state.collections.matchFormats

function* matchPageRequest({
    payload
}) {
    let matches = yield select(getMatches)
    var match = matches[payload.id]
    if (!match || payload.force) {
        match = yield call(UserApi.getMatch, payload.id)
    }
    yield put({
        type: ActionTypes.MATCH_RESPONSE,
        payload: match
    })
}

function* matchFormatsRequest({
    payload
}) {
    var matchFormats = yield select(getMatchFormats)
    if (!matchFormats || matchFormats.length == 0 || (payload && payload.force)) {
        matchFormats = yield call(UserApi.getMatchFormats)
    }
    yield put({
        type: ActionTypes.MATCH_FORMATS_RESPONSE,
        payload: matchFormats
    })
}

function* matchListRequest({
    payload
}) {
    payload = payload || { page: 1, perPage: 10 }
    var matches = yield call(UserApi.getMatches, payload)
    yield put({
        type: ActionTypes.MATCHES_RESPONSE,
        payload: matches
    })
}

function* watchMatchPageRequest() {
    yield takeEvery(ActionTypes.MATCH_REQUEST, matchPageRequest)
}

function* watchMatchFormatsRequests() {
    yield takeLatest(ActionTypes.MATCH_FORMATS_REQUEST, matchFormatsRequest)
}

function* watchMatchListRequests() {
    yield takeLatest(ActionTypes.MATCHES_REQUEST, matchListRequest)
}

export default function* root() {
    yield [
        fork(watchMatchPageRequest),
        fork(watchMatchFormatsRequests),
        fork(watchMatchListRequests),
    ]
}
