import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item brand-text">My Blog</Link>

              <div className="navbar-burger burger" data-target="navMenu">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div id="navMenu" className="navbar-menu">
              <div className="navbar-start">
                <NavLink to="/" exact activeClassName="is-active" className="navbar-item">Home</NavLink>
                <NavLink to="/about" exact activeClassName="is-active" className="navbar-item">About</NavLink>
                <NavLink to="/blog" activeClassName="is-active" className="navbar-item">Blog</NavLink>
              </div>
            </div>
          </div>
        </nav>

        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/blog" component={Blog}></Route>

      </div>
    );
  }
}

export default App;
