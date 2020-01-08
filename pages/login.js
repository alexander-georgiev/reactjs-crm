import React, { useCallback, useContext, useState } from "react";
import Router from 'next/router'
import firebase from '../src/Firebase';
import { AuthContext } from "../src/Auth";
import { Button, Form, FormGroup, Label, Input, FormText, TabContent, TabPane, NavItem, NavLink, Nav } from 'reactstrap';
import Page from '../components/MyLayout';
import classnames from 'classnames';
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const Login = ({ history }) => {
  const handleLogin = useCallback(
    
    async event => {
      event.preventDefault();
      
      
      const { login_email, login_password } = event.target.elements;
      
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(login_email.value, login_password.value);
          setState({INITIAL_STATE });
        //Router.push('/articles')
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

 //const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return <Redirect to="/" />;
  // }

const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      Router.push('/articles')
    } catch (error) {
      alert(error);
    }
  }, [history]);
const [activeTab, setActiveTab] = useState('1');

const toggle = tab => {
  if(activeTab !== tab) setActiveTab(tab);
}

  return (
    <Page>
      <div className="container">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Sign Up
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        <h1>Log in</h1>
        <form onSubmit={handleLogin}>
           <FormGroup>
            <Label for="user-email">Email</Label>
            <Input type="email" name="login_email" id="user-email" placeholder="Your Email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="login_password" id="user-password" placeholder="password placeholder" />
          </FormGroup>
          <Button type="submit" color="primary" size="lg" block>Log in</Button>
        </form>
        </TabPane>
        <TabPane tabId="2">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
          <Button type="submit" color="primary" size="lg" block>Sign Up</Button>
        </form>
        </TabPane>
        </TabContent>
      </div>
    </Page>
  );
};

export default Login;