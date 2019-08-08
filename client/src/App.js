import React from "react";
import Books from "./pages/Books/Books";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/Books/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/welcome" component={About} />
          <Route exact path="/customize" component={Books} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
