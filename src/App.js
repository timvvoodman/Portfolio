import React from "react";
//STYLING//
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Router
import { BrowserRouter as Router, Route } from "react-router-dom";

//Pages
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </>
    </Router>
  );
}

export default App;
