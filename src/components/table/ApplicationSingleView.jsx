import React from "react"
import { Link } from "react-router-dom"

const ApplicationSingleView = () => {
    return (
        <div className="cont">
        <div className="row">
          <div className="box boxwithoutmenu">
            <div className="bgofbox">
              <div className="header">
                <div className="row">
                  <div className="col-md-12">
                    <h2>ENROLLMENT DETAILS</h2>
                  </div>
                </div>
              </div>
              <div className="formbody">
                <form action="">
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Start Date</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="Feb 2 2019" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>End Date</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="Sep 21 2019" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Plan</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="Plan A" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Days of Week</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="Tues, Thurs" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Available Spot</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="Yes" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="bgofbox">
              <div className="header">
                <div className="row">
                  <div className="col-md-6 col-5">
                    <h2>STUDENT </h2>
                  </div>
                  <div className="col-md-6 col-7">
                    <a href="#" className="active">
                      Profile
                    </a>
                    <a href="#">Instructions</a>
                  </div>
                </div>
              </div>
              <div className="formbody">
                <form action="">
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Full Name</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="Johnny Johnson" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Birth Date</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="Sep 21 2018" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Gender</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="Male" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Language(s)</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="English, Mandarin" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Allergies</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="None" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Immunized</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="Yes" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Medication</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="None" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="box2">
            <div className="bgofbox">
              <div className="header">
                <div className="row">
                  <div className="col-md-4 col-12">
                    <h2>CONTACTS</h2>
                  </div>
                  <div className="col-md-8 col-12">
                    <a href="#" className="active">
                      Parent / Guardian #1
                    </a>
                    <a href="#">#2</a>
                    <a href="#">Emergency</a>
                    <a href="#">Physician</a>
                  </div>
                </div>
              </div>
              <div className="formbody">
                <form action="">
                  <div className="row">
                    <div className="col-md-4 col-6">
                      <h3>Full Name</h3>
                    </div>
                    <div className="col-md-5 col-6">
                      <input type="text" value="Johnny Johnson" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-6">
                      <h3>Address</h3>
                    </div>
                    <div className="col-md-5 col-6">
                      <input type="text" value="183 Spadina Ave" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-6">
                      <h3>Cell Phone</h3>
                    </div>
                    <div className="col-md-5 col-6">
                      <input type="text" value="905 372 3277" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-6">
                      <h3>Work Phone</h3>
                    </div>
                    <div className="col-md-5 col-6">
                      <input type="text" value="647 282 4837" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-6">
                      <h3>Company</h3>
                    </div>
                    <div className="col-md-5 col-6">
                      <input type="text" value="None" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="buttons">
              <Link to="/parents/applications" className="savebtn">
                UPDATE PLAN
              </Link>
              <Link to="/parents/applications" className="nextbtn">
                CANCEL APPLICATION
              </Link>
            </div>
          </div>
        </div>
      </div>
    
    )
}

export default ApplicationSingleView