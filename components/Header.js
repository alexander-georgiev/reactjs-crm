import React, { Component } from "react";
import Link from 'next/link';
import Head from 'next/head';
import "../src/style.scss";
import firebase from './Firebase';
import SignOut from './SignOut';
import Loading from './LoadingSpinner';
import Cookie from "js-cookie";
//import { authenticationService  } from '../components/Firebase/authentication';
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
    this.state = {
            currentUser: null,
            isLoading: true
        };
  }
  componentDidMount() {
    
    firebase.auth().onAuthStateChanged(authUser => {
     // console.log(authUser)
      if(authUser) {
        this.setState({
          currentUser: authUser
        });
      } else {
       this.setState({
        currentUser: authUser
      });
      }
    });
    this.setState({ isLoading: false })
    
  }
render() {
  const { currentUser } = this.state;
  return (
  <header>
  <Head>
      <title>Meetingbox</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
    </Head>
<Loading/>
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

            { Cookie.get('user') ? <SignOut/> : null }
            
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