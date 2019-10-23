import React from "react"
import { Router, Route, IndexRoute } from "react-router"
import { history } from "../store/configureStore.js"
import App from "../containers/App"
import * as Pages from "../containers"

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Pages.Home}/>
      <Route path="/profile/:id" component={Pages.Profile}/>
      <Route path="/matches" component={Pages.Matches}/>
      <Route path="/match/:id" component={Pages.Match}/>
      <Route path="/profile/:userId/friends" component={Pages.Friends}/>
      <Route path="/profile/:userId/friends/:type" component={Pages.Friends}/>
      <Route path="/news" component={Pages.News}/>
      <Route path="/news/:id" component={Pages.News}/>
      <Route path="/video" component={Pages.Video}/>
      <Route path="/auth" component={Pages.Auth}/>
      {/*<Route path="/video/:id" component={Pages.Video}/>*/}
      <Route path="*" component={Pages.NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
