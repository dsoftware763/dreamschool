import React from "react";
import Line from "../../components/charts/Line";
import arrowleftbox from "../../assets/images/arrowleftbox.svg"
import arrowdownselect from "../../assets/images/arrowdownselect.svg"
import ddicon from "../../assets/images/ddicon.svg"

const Home = () => {
  return (
    <div className="container-fluid hero">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="">Welcome, Emily!</h1>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="orange section">
            <div className="boxforh4">
              <h4>LEADS</h4>
            </div>
            <a href="#">
              <div className="box boxorange">
                <h2>Interested Programs</h2>

                <div className="inlinebox">
                  <h3>9</h3>
                </div>
                <div className="inlinebox">
                  <p>+3</p>
                  <p>This Week</p>
                </div>
                <img src={arrowleftbox} className="arrowright" alt="" />
              </div>
            </a>
            <a href="#">
              <div className="box boxorange">
                <h2>Open Applications</h2>

                <div className="inlinebox">
                  <h3>3</h3>
                </div>
                <div className="inlinebox">
                  <p>+0</p>
                  <p>This Week</p>
                </div>
                <img src={arrowleftbox} className="arrowright" alt="" />
              </div>
            </a>
            <a href="#">
              <div className="box boxorange">
                <h2>Open Applications</h2>

                <div className="inlinebox">
                  <h3>3</h3>
                </div>
                <div className="inlinebox">
                  <p>+0</p>
                  <p>This Week</p>
                </div>
                <img src={arrowleftbox} className="arrowright" alt="" />
              </div>
            </a>
          </div>
          <div className="blue section">
            <div className="boxforh4">
              <h4>TUTION</h4>
            </div>

            <a href="#">
              <div className="box boxorange bluebox bluebox2">
                <h2>Pending Payments</h2>

                <div className="inlinebox">
                  <h3>10</h3>
                </div>
                <div className="inlinebox">
                  <p>+2</p>
                  <p>This Week</p>
                </div>
                <img src={arrowleftbox} className="arrowright" alt="" />
              </div>
            </a>
            <a href="#">
              <div className="box boxorange bluebox bluebox2">
                <h2>Overdue Payments</h2>

                <div className="inlinebox">
                  <h3>11</h3>
                </div>
                <div className="inlinebox">
                  <p>+2</p>
                  <p>This Week</p>
                </div>
                <img src={arrowleftbox} className="arrowright" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-6 col-xl-6-new">
          <div className="tablebox">
            <div className="tableheader">
              <div className="row">
                <div className="col-md-7">
                  <h2>GROSS TUITION</h2>
                </div>
                <div className="col-md-5">
                  <div className="select">
                    <select>
                      <option value="0">This Month:</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                    <img
                      src={arrowdownselect.svg}
                      className="arrowdownselect"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="tablebody">
              <h2>
                <span>$14,200</span>Cumulative
              </h2>
              <div className="chart-area">
                <Line />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xl-6-new">
          <div className="tablebox tablebox2">
            <div className="tableheader">
              <div className="row">
                <div className="col-md-6">
                  <h2>
                    MY PROGRAM <img src={ddicon} alt="" />
                  </h2>
                </div>
                <div className="col-md-6">
                  <ul className="leftlist">
                    <li>
                      <a href="#" className="active">
                        Detail
                      </a>
                    </li>
                    <li>
                      <a href="#">Slots</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tablebody">
              <div className="row">
                <div className="col-md-12">
                  <div className="name">
                    <h2>Maxwell Thompson</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="boxleft">
                    <p>Active Students:</p>
                  </div>
                  <div className="boxright">
                    <p>12</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="boxleft">
                    <p>Pending Students:</p>
                  </div>
                  <div className="boxright">
                    <p>24</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="boxleft">
                    <p>Waitlisted Students:</p>
                  </div>
                  <div className="boxright">
                    <p>5</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="boxleft">
                    <p>Past Students:</p>
                  </div>
                  <div className="boxright">
                    <p>6</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="boxleft">
                    <p>Average Income:</p>
                  </div>
                  <div className="boxright">
                    <p>$5000 / month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
