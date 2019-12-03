import React from "react";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">Icon</div>
        <div className="col-10">
          <div className="row">
            <div className="col-1"></div>

            <div className="col-7">
              <div className="input-group">
                <div className="input-group-append">
                  <button type="button" className="btn btn-outline-secondary">
                    Search
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with segmented dropdown button"
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div role="separator" className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <button type="button" class="btn btn-outline-primary">
                Sign Up
              </button>
            </div>
            <div className="col">
              <button type="button" class="btn btn-outline-primary">
                Log In
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-1"></div>
            <div className="col-2">Browse By Category:</div>
            <div className="col-1">Hair</div>
            <div className="col-1">Skin</div>
            <div className="col-1">Nails</div>
            <div className="col-1">Make-Up</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
