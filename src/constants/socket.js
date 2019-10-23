// constants
export const CLOSED = 'closed';
export const CONNECTING = 'connecting';
export const OPEN = 'open';
export const AUTHENTICATED = 'authenticated';
export const PENDING = 'pending';
export const UNAUTHENTICATED = 'unauthenticated';

export const CONNECT_REQUEST = '@@socketCluster/CONNECT_REQUEST';
export const CONNECT_SUCCESS = '@@socketCluster/CONNECT_SUCCESS';
export const CONNECT_ERROR = '@@socketCluster/CONNECT_ERROR';
export const AUTH_REQUEST = '@@socketCluster/AUTH_REQUEST';
export const AUTH_SUCCESS = '@@socketCluster/AUTH_SUCCESS';
export const AUTH_ERROR = '@@socketCluster/AUTH_ERROR';
export const SUBSCRIBE_REQUEST = '@@socketCluster/SUBSCRIBE_REQUEST';
export const SUBSCRIBE_SUCCESS = '@@socketCluster/SUBSCRIBE_SUCCESS';
export const UNSUBSCRIBE = '@@socketCluster/UNSUBSCRIBE';
export const SUBSCRIBE_ERROR = '@@socketCluster/SUBSCRIBE_ERROR';
export const KICKOUT = '@@socketCluster/KICKOUT';
export const DISCONNECT = '@@socketCluster/DISCONNECT';
export const DEAUTHENTICATE = '@@socketCluster/DEAUTHENTICATE';

export const SOCKET_DATA_RECIEVED = "SOCKET_DATA_RECIEVED"
export const SOCKET_DATA_EMIT = "SOCKET_DATA_EMIT"
export const SOCKET_DATA_PUBLISH = "SOCKET_DATA_PUBLISH"


export const MATCH_CONFIRMATION = "MATCH_CONFIRMATION"
export const MATCH_CANCEL = "MATCH_CANCEL"
export const MATCH_CREATED = "MATCH_CREATED"
export const MATCH_CHANGED = "MATCH_CHANGED"

export const USER_CONFIRM = "USER_CONFIRM"
export const USER_CANCEL = "USER_CANCEL"
export const USERS_CONFIRMATION_STATUS = "USERS_CONFIRMATION_STATUS"
