import {
    fork
} from "redux-saga/effects";
import socket from "./socket"
import system from "./system"
import me from "./me"
import mix from "./mix"
import match from "./match"
import users from "./users"
import comments from "./comments"

// main saga generators
export function* sagas(dispatch) {
    yield [
      fork(socket, dispatch),
      fork(system),
      fork(me),
      fork(mix),
      fork(match),
      fork(users),
      fork(comments),
    ]
}
