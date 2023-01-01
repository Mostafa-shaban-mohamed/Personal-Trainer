import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const show = (this.state.collapsed) ? "show" : "";
    return (
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <img className="navbar-brand" alt="Logo" id="Logo" src="../Images/logo.png" width="120" height="80" />
          <div className={"collapse navbar-collapse " + show}>
            <ul className="nav navbar-nav">
              <li><Link className='link-menu' to="/home">Home</Link></li>
              <li><Link className='link-menu' to="/schedule">Schedule</Link></li>
              <li><Link className='link-menu' to="/about">About Us</Link></li>
              <li><Link className='link-menu' to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <button className="navbar-toggle" type="button" onClick={this.toggleNavbar}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
      </div>
    );
  }
}
