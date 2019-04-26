import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route
} from "react-router-dom";
import Post from "./componenets/Post";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Work from "./pages/Work";

class App extends Component {
  logo = require("./images/purp3.svg");
  render() {
    return (
      <Router>
        <div className="App">
          <div className="blur" />
        </div>
        <div className="container">
          <header className="App-header">
            <nav>
              <Link to="/" className="logo">
                <img src={this.logo} />
              </Link>
              <ul className="site-nav">
                <li>
                  <NavLink
                    to="/work"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <span>WORK</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <span>ABOUT</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <span>BLOG</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <span>CONTACT</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <div className="content">
            <Route path="/about" exact component={About} />
            <Route exact path={["/", "/work"]} component={Work} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:id" component={Post} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
