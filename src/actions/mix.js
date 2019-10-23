import fetch from 'isomorphic-fetch'
import Config from 'config'
import queryString from 'query-string'
import * as ActionTypes from 'constants/actionTypes'
import * as MixStatuses from 'constants/mix'

function requestCreateMix() {
  return {
    type: ActionTypes.MIX_SEARCH_REQUEST
  }
}

function receiveCreateMixResponse(json) {
  return {
    type: ActionTypes.MIX_SEARCH_RESPONSE,
    payload: {
      status: MixStatuses.MIX_STATUS_SEARCHING
    }, // TODO: Replace with real status
    json: json,
    receivedAt: Date.now()
  }
}

function receiveCancelMixResponse(json) {
  return {
    type: ActionTypes.MIX_SEARCH_RESPONSE,
    payload: {
      status: MixStatuses.MIX_STATUS_AVAILABLE
    }, // TODO: Replace with real status
    json: json,
    receivedAt: Date.now()
  }
}

export function matchCreated(data) {
  return {
    type: MixStatuses.MIX_MATCH_CREATED,
    payload: data
  }
}

export function matchFound(data) {
  return {
    type: MixStatuses.MIX_MATCH_FOUND,
    payload: data
  }
}

export function confirmationStatus(channelName, data) {
  return {
    type: MixStatuses.MIX_STATUS_UPDATE,
    payload: {
      channelName: channelName,
      data: data
    }
  }
}

export function cancelMixConfirmation(data) {
  return {
    type: MixStatuses.MIX_WAS_CANCELED,
    payload: data
  }
}

export function cancelCreateMixRequest() {
  return dispatch => {
    dispatch(requestCreateMix())
    var params = {
      'access-token': sessionStorage.getItem(Config.tokenName)
    }
    return fetch(Config.userApiBase + `/steam-users/me?${queryString.stringify(params)}`) // TODO: Replace with real query
      .then(req => req.json())
      .then(json => dispatch(receiveCancelMixResponse(json)))
  }
}

export function doCreateMixRequest(matchFormatId, mode) {
  return dispatch => {
    dispatch(requestCreateMix())
    var params = {
      'access-token': sessionStorage.getItem(Config.tokenName)
    }
    return fetch(Config.userApiBase + `/mixes-searches/start-search/${matchFormatId}/${mode}?${queryString.stringify(params)}`, {
        method: 'POST'
      })
      // return fetch(Config.userApiBase + `/steam-users/me?${queryString.stringify(params)}`) // TODO: Replace with real query
      .then(req => req.json())
      .then(json => dispatch(receiveCreateMixResponse(json)))
  }
}
