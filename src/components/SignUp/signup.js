import React from "react";
import "./signup.css";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="signup-container">
        <div className="signup-banner">
          <h2>JOIN NOW</h2>
          <h3>FOR A BEAUTY EXPERIENCE TAILORED TO YOU</h3>
        </div>
        <div className="signup-form-container">
          <div className="upload-img-container"></div>
          <div className="signup-form">
            <h4>For The Best Results, Answer as Many as Possible</h4>
            <div>
              <span className="input-desc">Email Address:</span>
              <input placeholder="placeholder" className="input-field"></input>
            </div>
            <div>
              <span className="input-desc">Password:</span>
              <input placeholder="placeholder" className="input-field"></input>
            </div>
            <div>
              <span className="input-desc">Confirm Password:</span>
              <input placeholder="placeholder" className="input-field"></input>
            </div>
            <div>
              <span className="input-desc">First Name:</span>
              <input placeholder="placeholder" className="input-field"></input>
            </div>
            <div>
              <span className="input-desc">Last Name:</span>
              <input placeholder="placeholder" className="input-field"></input>
            </div>
            <div>
              <span className="input-desc">Username:</span>
              <input placeholder="placeholder" className="input-field"></input>
            </div>
            <div>
              <span className="input-desc">Display Name:</span>
              <input placeholder="placeholder" className="input-field"></input>
            </div>
            <div>
              <span className="input-desc">Website:</span>
              <input placeholder="placeholder" className="input-field"></input>
            </div>
            <div>
              <span className="input-desc">Facebook:</span>
              <input placeholder="placeholder" className="input-field"></input>
            </div>
            <div>
              <span className="input-desc">Twitter:</span>
              <input placeholder="placeholder" className="input-field"></input>
            </div>
            <div>
              <span className="input-desc">Instagram:</span>
              <input placeholder="placeholder" className="input-field"></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
