import React from 'react';
import { Link } from 'react-router-dom';


class NotLoggedIn extends React.Component {
  render() {
    return (
      <header>
        <nav className="h-auto p-10">
          <div className="nav-wrapper">
            <Link className="brand-logo" to="/">Fast News</Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse" id="nav"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/login">Login</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to="/login">Login</Link></li>
            </ul>
            <div className="clear" />
          </div>
        </nav>
        <ul id="slide-out" className="side-nav">
          <li><a href="#!">First Sidebar Link</a></li>
          <li><a href="#!">Second Sidebar Link</a></li>
        </ul>
        <a href="#" data-activates="slide-out" className="button-collapse show-on-large" id="button-collapse"><i className="material-icons">menu</i></a>
      </header>
    );
  }
}

class LoggedIn extends React.Component {
  render() {
    return (
      <nav className="h-auto p-10">
        <div className="nav-wrapper">
          <Link className="brand-logo" to="/">Fast News</Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/my-news">My News</Link></li>
            <li><Link to="/portal">News Portal</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to="/my-news">My News</Link></li>
            <li><Link to="/portal">News Portal</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
          <div className="clear" />
        </div>
      </nav>
    );
  }
}

export default class Header extends React.Component {
  render() {
    if (localStorage.getItem('user') !== null) {
      return (<LoggedIn />
      );
    }
    return (
      <NotLoggedIn />
    );
  }
}