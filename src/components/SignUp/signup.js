import React from "react";
import "./signup.css";

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
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
            <div className="input-cont">
              <span className="input-desc">Email Address</span>
              <input
                name="email"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>
            </div>
            <div className="input-cont">
              <span className="input-desc">Password </span>
              <input
                name="password"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>
              <span className="input-desc">Confirm Password </span>
              <input
                name="confirmPw"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>
            </div>

            <div className="input-cont">
              <span className="input-desc">First Name </span>
              <input
                name="firstName"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>
              <span className="input-desc">Last Name </span>
              <input
                name="lastName"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>
            </div>

            <div className="input-cont">
              <span className="input-desc">Username </span>
              <input
                name="username"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>
            </div>
            <div className="input-cont">
              <span className="input-desc">Display Name </span>
              <input
                name="displayName"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>
            </div>

            <div className="input-cont">
              <span className="input-desc">Select Skin Color</span>
              <div className="attribute-container">
                <div className="attribute">
                  <div className="att-left white"></div>

                  <div className="att-right yellow"></div>
                </div>
                <div className="attribute">
                  <div className="att-left pink"></div>

                  <div className="att-right purple"></div>
                </div>
                <div className="attribute">
                  <div className="att-left lightbrown"></div>

                  <div className="att-right medbrown"></div>
                </div>
                <div className="attribute">
                  <div className="att-left brown"></div>

                  <div className="att-right darkbrown"></div>
                </div>
                <div className="attribute">
                  <div className="att-left darkerbrown"></div>

                  <div className="att-right black"></div>
                </div>
              </div>
            </div>

            <div className="input-cont">
              <span className="input-desc">Select Your Skin Type</span>
              <div className="attribute-container">
                <div className="skin-type-cont">Oily</div>
                <div className="skin-type-cont">Combo</div>
                <div className="skin-type-cont">Dry</div>
                <div className="skin-type-cont">Sensitive</div>
                <div className="skin-type-cont">Acne Prone</div>
              </div>
            </div>

            <div className="input-cont">
              <span className="input-desc">Select Your Hair Type</span>
              <div className="attribute-container">
                <div className="skin-type-cont">Straight</div>
                <div className="skin-type-cont">Curly</div>
                <div className="skin-type-cont">Kinky</div>
                <div className="skin-type-cont">Wavy</div>
                <div className="skin-type-cont">Baldy</div>
              </div>
            </div>

            <div className="input-cont">
              <span className="input-desc">Website </span>
              <input
                name="website"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>
            </div>
            <div className="input-cont">
              <span className="input-desc">Facebook </span>
              <input
                name="facebook"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>
            </div>
            <div className="input-cont">
              <span className="input-desc">Twitter </span>
              <input
                name="twitter"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>
            </div>
            <div className="input-cont">
              <span className="input-desc">Instagram </span>
              <input
                name="instagram"
                placeholder="required"
                className="input-field"
                onChange={e => this.handleChange(e)}
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
