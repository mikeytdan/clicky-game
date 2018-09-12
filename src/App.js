import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./pages/Game";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Game} />
      <Route exact path="/game" component={Game} />
    </div>
  </Router>
);

export default App;
