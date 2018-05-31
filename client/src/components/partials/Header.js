import React from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect className="navbar-demostreaming">
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/">DEMO Streaming</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <div>
            <ul className="nav navbar-nav navbar-right">
              <li><NavLink to="/">Log in</NavLink></li>
              <li><NavLink to="/" className="button">Start your free trial</NavLink></li>
            </ul>
          </div>
        </Navbar.Collapse>
      </Navbar>)
  }
}

export default Header