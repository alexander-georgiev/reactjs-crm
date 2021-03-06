import React, { useState, Component } from "react";
//import { compose } from 'recompose';
import Router from 'next/router'
//import { withFirebase } from '../components/Firebase';
import firebase from '../components/Firebase';
import { Alert, Card, Button, Form, FormGroup, Label, Input, FormText, TabContent, TabPane, NavItem, NavLink, Nav } from 'reactstrap';
import Page from '../components/MyLayout';
import classnames from 'classnames';
import Cookie from "js-cookie";

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: null,
  activeTab: '1',
};

class SignInFormBase extends Component {

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };

  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }
  setFBTokenInCookie(token) {
    document.cookie = "firebaseToken=" + token;
  }
 
  getFBTokenCookie() {
    let name = "firebaseToken=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  onLogin = event => {
    const { email, password } = this.state;
    var self = this;
    firebase
      .auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.setState({ currentUser: user.user });
        localStorage.setItem('currentUser', true);
        Cookie.set('user', user.user.refreshToken);
        //document.cookie = "firebaseToken=" + user.user.refreshToken;
        
        //location.replace('/');

      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onRegistration = event => {
    const { email, password } = this.state;
    firebase
      .auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ currentUser: user.user });
        location.replace('/articles');

      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <Page>
        <div className="container">
        <div className="entry-content">
          <section className="login">
            <Nav tabs className="nav-fill">
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Sign In
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Sign Up
                </NavLink>
              </NavItem>
            </Nav>
            
              <Card body>
              <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">                
                  <form onSubmit={this.onLogin}>
                  {error && <p>{error.message}</p>}
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input type="email" name="email" id="email" placeholder="Email Address" value={email} onChange={this.onChange}/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="email">Password</Label>
                      <Input
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                      />
                      </FormGroup>
                      <Button type="submit" color="primary" block>
                        Sign In
                      </Button>
                      <Button href="/articles" color="link" block>
                        Forgot Password
                      </Button>
                    
                  </form>
                </TabPane>
                <TabPane tabId="2">                
                  <form onSubmit={this.onRegistration}>
                  {error && <Alert color="danger"><i class="fas fa-exclamation"></i> {error.message}</Alert>}
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input type="email" name="email" id="email" placeholder="Email Address" value={email} onChange={this.onChange}/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="email">Password</Label>
                      <Input
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                      />
                      </FormGroup>
                      <Button type="submit" color="primary" block>
                        Sign Up
                      </Button>
                    
                  </form>
                </TabPane>
                </TabContent>
              </Card>
            </section>
            </div>
        </div>
      </Page>
    );
  }
}
export default SignInFormBase;