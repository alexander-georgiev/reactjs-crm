import firebase from './Firebase';
import React from 'react';
import {
  NavItem,
  NavLink, } from 'reactstrap';

export default function SignOutButton() {
  return (
     <NavItem>
		<NavLink href="#" onClick={() => firebase.auth().signOut()}>Sign Out</NavLink>
  	</NavItem>
  );
}