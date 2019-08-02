import React, { useState } from "react";
import { Link } from "react-router-dom"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectArrow from "../../assets/images/selectarrow.svg"

const MyEnrollmentDetailsModal = () => {
  const [someState, setSomeState] = useState({
	  startDate: new Date(),
	  endDate: new Date()
  });

  console.log(someState, "State")
  return (
    <div className="cont">
      <div className="contbox">
        <div className="header">
          <h2>Emily’s Dreamschool</h2>
        </div>

        <div className="body">
          <div className="row">
            <div className="col-md-7 col-lg-6">
              <h2>Program Plan</h2>

              <div className="boxwithcroll">
                <h3>INFANTS</h3>
                <div className="controw">
                  <div className="row">
                    <div className="col-7">
                      <h4>Plan A</h4>
                      <p>
                        <span>$125 / wk</span>
                      </p>
                      <p>6 days / wk, 10:00 AM - 5:00 PM</p>
                    </div>
                    <div className="col-5 parent">
                      <div className="selectdiv">
                        <a href="#" className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13.754"
                            height="13"
                            viewBox="0 0 13.754 13"
                          >
                            <g
                              id="Group_800"
                              data-name="Group 800"
                              transform="translate(-939 -754)"
                            >
                              <g
                                id="Ellipse_1040"
                                data-name="Ellipse 1040"
                                transform="translate(939 754)"
                                fill="none"
                                stroke=""
                                stroke-width="1.5"
                              >
                                <circle
                                  cx="6.5"
                                  cy="6.5"
                                  r="6.5"
                                  stroke="none"
                                />
                                <circle cx="6.5" cy="6.5" r="6" fill="none" />
                              </g>
                              <path
                                id="Path_1429"
                                data-name="Path 1429"
                                d="M3555.464,4000.681l3.458,3.642,6.47-6.782"
                                transform="translate(-2613 -3242)"
                                fill="none"
                                stroke=""
                                stroke-width="1.5"
                              />
                            </g>
                          </svg>
                          Select
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="controw">
                  <div className="row">
                    <div className="col-7">
                      <h4>Plan A</h4>
                      <p>
                        <span>$125 / wk</span>
                      </p>
                      <p>6 days / wk, 10:00 AM - 5:00 PM</p>
                    </div>
                    <div className="col-5 parent">
                      <div className="selectdiv" />
                    </div>
                  </div>
                </div>
                <h3>TODDLERS</h3>
                <div className="controw">
                  <div className="row">
                    <div className="col-7">
                      <h4>Plan A</h4>
                      <p>
                        <span>$125 / wk</span>
                      </p>
                      <p>6 days / wk, 10:00 AM - 5:00 PM</p>
                    </div>
                    <div className="col-5 parent">
                      <div className="selectdiv">
                        <a href="#" className="selected">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13.754"
                            height="13"
                            viewBox="0 0 13.754 13"
                          >
                            <g
                              id="Group_800"
                              data-name="Group 800"
                              transform="translate(-939 -754)"
                            >
                              <g
                                id="Ellipse_1040"
                                data-name="Ellipse 1040"
                                transform="translate(939 754)"
                                fill="none"
                                stroke=""
                                stroke-width="1.5"
                              >
                                <circle
                                  cx="6.5"
                                  cy="6.5"
                                  r="6.5"
                                  stroke="none"
                                />
                                <circle cx="6.5" cy="6.5" r="6" fill="none" />
                              </g>
                              <path
                                id="Path_1429"
                                data-name="Path 1429"
                                d="M3555.464,4000.681l3.458,3.642,6.47-6.782"
                                transform="translate(-2613 -3242)"
                                fill="none"
                                stroke=""
                                stroke-width="1.5"
                              />
                            </g>
                          </svg>
                          Selected
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="controw">
                  <div className="row">
                    <div className="col-7">
                      <h4>Plan A</h4>
                      <p>
                        <span>$125 / wk</span>
                      </p>
                      <p>6 days / wk, 10:00 AM - 5:00 PM</p>
                    </div>
                    <div className="col-5 parent">
                      <div className="selectdiv">
                        <a href="#" className="selected">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13.754"
                            height="13"
                            viewBox="0 0 13.754 13"
                          >
                            <g
                              id="Group_800"
                              data-name="Group 800"
                              transform="translate(-939 -754)"
                            >
                              <g
                                id="Ellipse_1040"
                                data-name="Ellipse 1040"
                                transform="translate(939 754)"
                                fill="none"
                                stroke=""
                                stroke-width="1.5"
                              >
                                <circle
                                  cx="6.5"
                                  cy="6.5"
                                  r="6.5"
                                  stroke="none"
                                />
                                <circle cx="6.5" cy="6.5" r="6" fill="none" />
                              </g>
                              <path
                                id="Path_1429"
                                data-name="Path 1429"
                                d="M3555.464,4000.681l3.458,3.642,6.47-6.782"
                                transform="translate(-2613 -3242)"
                                fill="none"
                                stroke=""
                                stroke-width="1.5"
                              />
                            </g>
                          </svg>
                          Selected
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-6">
              <div className="rightside">
                <div className="wraper">
                  <h2>Days of the week</h2>
                  <div className="select">
                    <img src={SelectArrow} alt="" />
                    <select>
                      <option value="0">Monday, Wednesday</option>
                      <option value="1">Monday, Wednesday</option>
                    </select>
                  </div>
                  <h2>Start Date</h2>
                  <div className="select">
				  	<img src={SelectArrow} alt="" />
                    <DatePicker
                      selected={someState.startDate}
                      onChange={(date) => setSomeState({...someState, startDate: date})}
                      dateFormat="MMMM d, yyyy"
					  className="select"
                    />
                  </div>
                  <h2>End Date</h2>
                  <div className="select">
				  	<img src={SelectArrow} alt="" />
				  	<DatePicker
                      selected={someState.endDate}
                      onChange={(date) => setSomeState({...someState, endDate: date})}
                      dateFormat="MMMM d, yyyy"
                      className="select"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="buttons">
              <Link to="/parents/my-enrollments/end" className="savebtn">
                EDIT
              </Link>
              <Link to="/parents/my-enrollments" className="nextbtn">
                END ENROLLMENT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEnrollmentDetailsModal;
