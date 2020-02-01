import React from "react";
import firebase from "firebase";
import AuthContext from "../contexts/auth";
import { Redirect } from "react-router-dom";

export default class Login extends React.Component {
  state = { email: "", password: "" };

  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  submitForm(e) {
    e.preventDefault();

    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log("Returns: ", response);
      })
      .catch(err => {
        const { message } = err;
        console.log(message);
        return;
      });

    // firebaseServices
    //   .login(email, password)
    //   .then(response => {
    //     console.log("Returns: ", response);
    //   })
    //   .catch(err => {
    //     const { message } = err;
    //     console.log(message);
    //     return;
    //   });
  }

  render() {
    const displayForm = (
      <div className="login-contianer">
        <input
          onChange={e => this.handleChange(e)}
          placeholder="email"
          name="email"
        ></input>
        <input
          onChange={e => this.handleChange(e)}
          placeholder="password"
          name="password"
        ></input>
        <button onClick={e => this.submitForm(e)}>Submit</button>
      </div>
    );
    return (
      <AuthContext.Consumer>
        {user => {
          if (user) {
            return <Redirect to="/" />;
          } else {
            return displayForm;
          }
        }}
      </AuthContext.Consumer>
    );
  }
}
