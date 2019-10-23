import "babel-polyfill";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore.js";
import { router } from "./routes/index.js";
import DevTools from './components/DevTools';

// render the main component
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);

if(process.env.NODE_ENV == 'dev') {
  // Render devTools
  ReactDOM.render(
    <DevTools store={store} />, 
    document.getElementById('dev-tools')
  );
}