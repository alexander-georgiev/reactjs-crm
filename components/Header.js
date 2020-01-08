import React, { Component } from "react";
import Link from 'next/link';
import Head from 'next/head';
import "../src/style.scss";
import firebase from '../components/Firebase';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
class Header extends Component {
  constructor(props){
    super(props);
    // var self = this;
    // firebase.auth().onAuthStateChanged(function(user) {
    //   self.setState({ user: user });
    // });
  }
render() {
  return (
  <header>
  <Head>
      <title>Meetingbox</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
    </Head>

      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Meetingbox</NavbarBrand>
        <NavbarToggler  />
        <Collapse  navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/articles">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/registration">Sign In</NavLink>
            </NavItem>
             
             <NavItem className={ firebase.auth().currentUser ? '' : 'd-none' }>
              <NavLink href="#" onClick={() => firebase.auth().signOut()}>Sign Out</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin">Admin</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>

  </header>
  )
}
}
export default Header;