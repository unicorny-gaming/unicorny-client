import { SOCKET_DATA_RECIEVED, SOCKET_DATA_EMIT, SOCKET_DATA_PUBLISH } from 'constants/socket'

export function recieveSocketData(channel, data) {
    return {
        type: SOCKET_DATA_RECIEVED,
        payload: {
            channel: channel,
            data: data
        }
    }
}

export function publishSocketData(channelName, data) {
    return {
        type: SOCKET_DATA_PUBLISH,
        payload: {
            channelName: channelName,
            data: data
        }
    }
}

export function emitSocketData(event, data) {
    return {
        type: SOCKET_DATA_EMIT,
        payload: {
            event: event,
            data: data
        }
    }
}