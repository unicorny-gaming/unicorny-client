import { combineReducers } from "redux"
import identity from "./identity"
import activeMixesSearch from "./activeMixesSearch"
import friendsInbox from "./friendsInbox"
import friendsOutbox from "./friendsOutbox"
import alerts from "./alerts"
import notifications from "./notifications"

export const me = combineReducers({
  identity: identity,
  activeMixesSearch: activeMixesSearch,
  friendsInbox: friendsInbox,
  friendsOutbox: friendsOutbox,
  alerts: alerts,
  notifications: notifications,
})

export default me
