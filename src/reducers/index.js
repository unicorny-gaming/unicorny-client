import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { reducer as formReducer } from "redux-form"
import { socketClusterReducer } from 'redux-socket-cluster'
import me from "./me/"
import mix from "./mix"
import events from "./events"
import collections from "./collections"
import socketData from "./socketData"

// main reducers
export const reducers = combineReducers({
    routing: routerReducer,
    form   : formReducer,
    // your reducer here
    me     : me,
    mix    : mix,
    events : events,
    collections : collections,
    socket : socketClusterReducer,
    socketData : socketData
})