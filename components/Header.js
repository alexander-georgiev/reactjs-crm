import Link from 'next/link';
import Head from 'next/head';
import "../src/style.scss";
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
const Header = () => (
  <div>
  <Head>
      <title>Meetingbox</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
    </Head>
  <header>
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
              <NavLink href="/login">Sign In</NavLink>
            </NavItem>
             <NavItem>
              <NavLink onClick={() => app.auth().signOut()}>Sign Out</NavLink>
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
  </div>
);

export default Header;