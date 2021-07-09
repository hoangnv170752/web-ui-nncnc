// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registers from "./pages/registers/Registers";
import React from 'react';

function App() {
  return (
    <Router>
      <div classname="first">
        <Route path="/" exact render={(props) => <Registers />} />
      </div>
      <Route exact path="/home">
            <Home />
      </Route>
    </Router>
  );
}

export default App;