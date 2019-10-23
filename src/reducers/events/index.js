import { combineReducers } from "redux"
import commentSended from "./commentSended"

export const events = combineReducers({
  commentSended: commentSended,
})

export default events
