import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Front from "./pages/Front";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
      <Wrapper>
      <Route exact path="/" component={Front} />
      <Route exact path="/about" component={About} /> 
      <Route exact path="/portfolio" component={Portfolio}/>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
