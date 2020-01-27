import React from "react";
import "./signup.css";
import firebase from "firebase";
import AuthContext from "../../contexts/auth";
import { Redirect } from "react-router-dom";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPw: "",
      firstName: "",
      lastName: "",
      username: "",
      displayName: "",
      skinColor: "",
      skinType: "",
      hairType: "",
      website: "",
      facebook: "",
      twitter: "",
      instagram: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  setAttribute(name, value) {
    this.setState({ [name]: value }, () => console.log(this.state[name]));
  }

  submit(e) {
    for (let key in this.state) {
      if (this.state[key] === "") {
        console.log(key);
        alert("fill all fields");
        return;
      }
    }

    if (this.state.password !== this.state.confirmPw) {
      alert("passwords don't match");
      return;
    }

    e.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        alert(err.message);
      });
  }

  render() {
    const displayForm = (
      <div className="signup-container">
        <div className="signup-banner">
          <h2> JOIN NOW </h2> <h3> FOR A BEAUTY EXPERIENCE TAILORED TO YOU </h3>{" "}
        </div>{" "}
        <div className="signup-form-container">
          <div className="upload-img-container"> </div>{" "}
          <div className="signup-form">
            <h4> For The Best Results, Answer as Many as Possible </h4>{" "}
            <div className="input-cont">
              <span className="input-desc"> Email Address </span>{" "}
              <input
                name="email"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>{" "}
            </div>{" "}
            <div className="input-cont">
              <span className="input-desc"> Password </span>{" "}
              <input
                name="password"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>{" "}
              <span className="input-desc"> Confirm Password </span>{" "}
              <input
                name="confirmPw"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>{" "}
            </div>
            <div className="input-cont">
              <span className="input-desc"> First Name </span>{" "}
              <input
                name="firstName"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>{" "}
              <span className="input-desc"> Last Name </span>{" "}
              <input
                name="lastName"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>{" "}
            </div>
            <div className="input-cont">
              <span className="input-desc"> Username </span>{" "}
              <input
                name="username"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>{" "}
            </div>{" "}
            <div className="input-cont">
              <span className="input-desc"> Display Name </span>{" "}
              <input
                name="displayName"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>{" "}
            </div>
            <div className="input-cont">
              <span className="input-desc"> Select Skin Color </span>{" "}
              <div className="attribute-container">
                <div className="attribute">
                  <div
                    onClick={() => this.setAttribute("skinColor", "1")}
                    className="att-left white"
                    name="skinColor"
                    value="1"
                  ></div>{" "}
                  <div
                    onClick={() => this.setAttribute("skinColor", "2")}
                    className="att-right yellow"
                    name="skinColor"
                    value="2"
                  ></div>{" "}
                </div>{" "}
                <div className="attribute">
                  <div
                    onClick={() => this.setAttribute("skinColor", "3")}
                    className="att-left pink"
                    name="skinColor"
                    value="3"
                  ></div>
                  <div
                    onClick={() => this.setAttribute("skinColor", "4")}
                    className="att-right purple"
                    name="skinColor"
                    value="4"
                  ></div>{" "}
                </div>{" "}
                <div className="attribute">
                  <div
                    onClick={() => this.setAttribute("skinColor", "5")}
                    className="att-left lightbrown"
                    name="skinColor"
                    value="5"
                  ></div>
                  <div
                    onClick={() => this.setAttribute("skinColor", "6")}
                    className="att-right medbrown"
                    name="skinColor"
                    value="6"
                  ></div>{" "}
                </div>{" "}
                <div className="attribute">
                  <div
                    onClick={() => this.setAttribute("skinColor", "7")}
                    className="att-left brown"
                    name="skinColor"
                    value="7"
                  ></div>
                  <div
                    onClick={() => this.setAttribute("skinColor", "8")}
                    className="att-right darkbrown"
                    name="skinColor"
                    value="8"
                  ></div>{" "}
                </div>{" "}
                <div className="attribute">
                  <div
                    onClick={() => this.setAttribute("skinColor", "9")}
                    className="att-left darkerbrown"
                    name="skinColor"
                    value="9"
                  ></div>
                  <div
                    onClick={() => this.setAttribute("skinColor", "10")}
                    className="att-right black"
                    name="skinColor"
                    value="10"
                  ></div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div className="input-cont">
              <span className="input-desc"> Select Your Skin Type </span>{" "}
              <div className="attribute-container">
                <div
                  className="skin-type-cont"
                  name="skinType"
                  onClick={() => this.setAttribute("skinType", "Oily")}
                >
                  Oily{" "}
                </div>{" "}
                <div
                  className="skin-type-cont"
                  name="skinType"
                  onClick={() => this.setAttribute("skinType", "Combo")}
                >
                  Combo{" "}
                </div>{" "}
                <div
                  className="skin-type-cont"
                  name="skinType"
                  onClick={() => this.setAttribute("skinType", "Dry")}
                >
                  Dry{" "}
                </div>{" "}
                <div
                  className="skin-type-cont"
                  name="skinType"
                  onClick={() => this.setAttribute("skinType", "Sensitive")}
                >
                  Sensitive{" "}
                </div>{" "}
                <div
                  className="skin-type-cont"
                  name="skinType"
                  onClick={() => this.setAttribute("skinType", "Acne Prone")}
                >
                  Acne Prone{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div className="input-cont">
              <span className="input-desc"> Select Your Hair Type </span>{" "}
              <div className="attribute-container">
                <div
                  className="skin-type-cont"
                  name="hairType"
                  onClick={() => this.setAttribute("hairType", "Straight")}
                  value="Straight"
                >
                  Straight{" "}
                </div>{" "}
                <div
                  className="skin-type-cont"
                  name="hairType"
                  onClick={() => this.setAttribute("hairType", "Curly")}
                  value="Curly"
                >
                  Curly{" "}
                </div>{" "}
                <div
                  className="skin-type-cont"
                  name="hairType"
                  onClick={() => this.setAttribute("hairType", "Kinky")}
                  value="Kinky"
                >
                  Kinky{" "}
                </div>{" "}
                <div
                  className="skin-type-cont"
                  name="hairType"
                  onClick={() => this.setAttribute("hairType", "Wavy")}
                  val="Wavy"
                >
                  Wavy{" "}
                </div>{" "}
                <div
                  className="skin-type-cont"
                  name="hairType"
                  onClick={() => this.setAttribute("hairType", "Baldy")}
                  value="Baldy"
                >
                  Baldy{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div className="input-cont">
              <span className="input-desc"> Website </span>{" "}
              <input
                name="website"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>{" "}
            </div>{" "}
            <div className="input-cont">
              <span className="input-desc"> Facebook </span>{" "}
              <input
                name="facebook"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>{" "}
            </div>{" "}
            <div className="input-cont">
              <span className="input-desc"> Twitter </span>{" "}
              <input
                name="twitter"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>{" "}
            </div>{" "}
            <div className="input-cont">
              <span className="input-desc"> Instagram </span>{" "}
              <input
                name="instagram"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <button onClick={e => this.submit(e)}> submit </button>{" "}
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
