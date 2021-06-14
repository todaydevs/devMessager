import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Join from "./components/join";
import Chat from "./components/chat";

const App = () => {
  <Router>
  <Route path="/" exact component={join} />
  <Route path="/chat" component={chat} />
  </Router>
}
export default App;