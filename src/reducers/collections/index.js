import { combineReducers } from "redux"
import users from "./users"
import friends from "./friends"
import comments from "./comments"
import matches from "./matches"
import matchFormats from "./matchFormats"

export const collections = combineReducers({
    users: users,
    friends: friends,
    comments: comments,
    matches: matches,
    matchFormats: matchFormats,
})

export default collections