import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png'
import './Navbar.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem   
  } from 'reactstrap';

export class NavBar extends Component {
  static displayName = NavBar.name;
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
    collapsed: true
    };
}

toggleNavbar() {
    this.setState({
    collapsed: !this.state.collapsed
    });
}

closeNavbar() {
    if (this.state.collapsed !== true) {
    this.toggleNavbar();
    }
}
  render () {
    return (
        <div className="Nav">
         <Navbar className="navbar navbar-expand-sm navbar-light fixed-top ">
        <NavbarBrand tag={NavLink} to="/"> <img className="logo" src={Logo} alt="Logo"/></NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink  onClick={this.closeNavbar} className="item" activeClassName="item-active" exact  to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  onClick={this.closeNavbar} className="item"  activeClassName="item-active" exact  to="/district" >The District</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  onClick={this.closeNavbar} className="item"  activeClassName="item-active" exact  to="/art" >Art</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  onClick={this.closeNavbar} className="item"  activeClassName="item-active" exact  to="/commons" >Commons</NavLink>
            </NavItem>
           
          </Nav>
        </Collapse>
      </Navbar>
    
      </div>
    
);
}
}