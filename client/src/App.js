import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Chat from "./component/Chat/Chat";
import Join from "./component/Join/Join";

const App = () => {
  return (
    <Router>
     <Route path="/" exact component={Chat} />
     <Route path="/join" component={Join} />
    </Router>
    )
}
export default App;
