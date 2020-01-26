import React from "react";
import firebaseServices from "../firebase/firebase";

export default class Login extends React.Component {
  state = { email: "", password: "" };

  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  submitForm(e) {
    e.preventDefault();

    const { email, password } = this.state;
    firebaseServices
      .login(email, password)
      .then(response => {
        console.log("Returns: ", response);
      })
      .catch(err => {
        const { message } = err;
        console.log(message);
        return;
      });
  }

  render() {
    return (
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
  }
}
