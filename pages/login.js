import React, { useCallback, useContext } from "react";
import firebase from '../src/Firebase';
import { AuthContext } from "../src/Auth";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Login = ({ history }) => {
  let self = this;
  const handleLogin = useCallback(

    async event => {
      event.preventDefault();
      
      console.log(history);
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        self.props.url.replaceTo('/articles')
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

 // const { currentUser } = useContext(AuthContext);

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
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;