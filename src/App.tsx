import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route
} from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Work from "./pages/Work";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="logo">
              <Link to="/" className="logo-link">
                <span className="purple">purple</span>shell
              </Link>
            </div>
            <ul className="site-nav">
              <li>
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="active"
                >
                  <span>about</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/work"
                  className="nav-link"
                  activeClassName="active"
                >
                  <span>work</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="nav-link"
                  activeClassName="active"
                >
                  <span>blog</span>
                </NavLink>
              </li>
            </ul>
          </header>
          <div className="content">
            <Route path="/about" exact component={About} />
            <Route path="/work" component={Work} />
            <Route path="/blog" component={Blog} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
