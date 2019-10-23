import { createStore, applyMiddleware, compose } from "redux";
// import { apiMiddleware } from 'redux-api-middleware';
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";

import freeze from "redux-freeze";
import { reducers } from "../reducers/index";
import { sagas } from "../sagas/index";

// Dev tools only
import thunk from 'redux-thunk';
import DevTools from '../components/DevTools';


// add the middleWares
let middleWares = [];

// add thunk
middleWares.push(thunk)

// add api middleware
// middleWares.push(apiMiddleware);

// add the router middleware
middleWares.push(routerMiddleware(browserHistory));

// // add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middleWares.push(sagaMiddleware);

// add the freeze dev middleware
if (process.env.NODE_ENV == 'dev') {
    middleWares.push(freeze);
    // middleWares.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // Support https://github.com/zalmoxisus/redux-devtools-extension
}

// apply the middleware
let middleware = applyMiddleware(...middleWares);

// add the redux dev tools
if (process.env.NODE_ENV == 'dev' /** && window.devToolsExtension /**/) {
    middleware = compose(
        middleware,
        // window.devToolsExtension(),
        DevTools.instrument()
    );
} else {
    middleware = compose(
        middleware,
    );
}

// create the store
const store   = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(sagas, store.dispatch);

// add hot reload
if	(module.hot)	{
    module.hot.accept('../reducers',	()	=>	{
        const	nextRootReducer	=	require('../reducers/index')
        store.replaceReducer(nextRootReducer)
    })
}

// export
export {store, history};
