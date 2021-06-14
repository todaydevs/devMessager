import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Chat from "./component/chat";

const App = () => {
  return (
    <Router>
     <Route path="/" exact component={Chat} />
    </Router>
    )
}
export default App;
