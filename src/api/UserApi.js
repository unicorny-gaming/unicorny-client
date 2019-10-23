// Inject fetch polyfill if fetch is unsuported
// if (!window.fetch) { const fetch = require('whatwg-fetch') }

import queryString from 'query-string'

var params = {
  'access-token': sessionStorage.getItem(Config.tokenName)
}

const UserApi = {
  getMatches(page, perPage) {
    var query = {
      'page': page || 1,
      'per-page': perPage || 10
    }
    return fetchWrapper(`${Config.userApiBase}/matches?${queryString.stringify(query)}`, {
      method: 'GET',
    })
  },
  getMatch(matchId) {
    return fetchWrapper(`${Config.userApiBase}/matches/${matchId}`, {
      method: 'GET',
    })
  },
  getUserProfile(userId) {
    return fetchWrapper(`${Config.userApiBase}/steam-users/${userId}`, {
      method: 'GET',
    })
  },
  getMe() {
    return fetchWrapper(`${Config.userApiBase}/steam-users/me?${queryString.stringify(params)}`, {
      method: 'GET',
    })
  },
  getMyNotifications() {
    return fetchWrapper(`${Config.userApiBase}/notifications?${queryString.stringify(params)}`, {
      method: 'GET',
    })
  },
  markNotificationsAsRead(notificationIds) {
    return fetchWrapper(`${Config.userApiBase}/notifications/mark-readed?${queryString.stringify(params)}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST',
      body: {
        notificationIds: notificationIds
      }
    })
  },
  getFriends(userId) {
    return fetchWrapper(`${Config.userApiBase}/steam-users/${userId}/friends?${queryString.stringify(params)}`, {
      method: 'GET',
    })
  },
  getUserMatches(userId, page, perPage) {
    var query = {
      'page': page || 1,
      'per-page': perPage || 10
    }
    return fetchWrapper(`${Config.userApiBase}/steam-users/${userId}/match-stats?${queryString.stringify(query)}`, {
      method: 'GET',
    })
  },
  getFriendsInbox() {
    return fetchWrapper(`${Config.userApiBase}/friends/inbox?${queryString.stringify(params)}`, {
      method: 'GET',
    })
  },
  getFriendsOutbox() {
    return fetchWrapper(`${Config.userApiBase}/friends/outbox?${queryString.stringify(params)}`, {
      method: 'GET',
    })
  },
  addFriend(userId) {
    return fetchWrapper(`${Config.userApiBase}/steam-users/${userId}/add-to-friends?${queryString.stringify(params)}`, {
      method: 'POST',
    })
  },
  removeFriend(userId) {
    return fetchWrapper(`${Config.userApiBase}/steam-users/${userId}/remove-from-friends?${queryString.stringify(params)}`, {
      method: 'POST',
    })
  },
  getComments(modelName,id) {
    let qs = {
      "per-page": 40
    }
    return fetchWrapper(`${Config.userApiBase}/${modelName}/${id}/comments?${queryString.stringify(qs)}`, {
      method: 'GET',
    })
  },
  addComment(modelName,id,content) {
    var data = new URLSearchParams()
    data.append("content", content)
    return fetchWrapper(`${Config.userApiBase}/${modelName}/${id}/comments?${queryString.stringify(params)}`, {
      method: 'POST',
      body: data
    })
  },
  getMatchFormats() {
    return fetchWrapper(`${Config.userApiBase}/match-formats`, {
      method: 'GET',
    })
  },
  mixCreateSearch(matchFormatId, mode) {
    return fetchWrapper(`${Config.userApiBase}/mixes-searches/start-search/${matchFormatId}/${mode}?${queryString.stringify(params)}`, {
      method: 'POST',
    })
  },
  mixCancelSearch() {
    return fetchWrapper(`${Config.userApiBase}/mixes-searches/cancel-search?${queryString.stringify(params)}`, {
      method: 'POST',
    })
  },
}

function fetchWrapper(url, params) {
  return fetch(url, params)
    .then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(data => {
      // console.log(data) // The data does log!
      return data
    })
}

function statusHelper(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

export default UserApi
