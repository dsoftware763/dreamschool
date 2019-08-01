import React from "react";
import { Link } from "react-router-dom"
import MyEnrollmentImg from "../../assets/images/myenrollmentsimg.png"
import EnrollChild from "../../assets/images/enrollchild.png"
import MonthlySurvey from "../../assets/images/monthlysurvey.svg"
import WriteAReview from "../../assets/images/writeareview.svg"

const MyEnrollmentModal = props => {
  let { count } = props;
  let modals = [];
  while (count--) {
    modals.push(
      <div className="box">
        <div className="imghere">
          <div className="divforimg">
            <img src={MyEnrollmentImg} alt="" />
            <div className="paragraph">
              <div className="verticalcenter">
                <p>Emily’s Dreamschool</p>
                <p className="btnvd">
                  <Link to="/parents/my-enrollments/view">View Details</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="continbox">
          <div className="row margintopdiv">
            <div className="col-md-12">
              <img src={EnrollChild} className="imgchild" alt="" />
              <h3>Johnny Johnston</h3>
              <div className="skills">
                <p>
                  <img src={MonthlySurvey} alt="" />
                  Monthly Survey
                </p>
                <p>
                  <img src={WriteAReview} alt="" />
                  Write a Review
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="continbox">
          <div className="row">
            <div className="col-6">
              <h2>Plan: </h2>
            </div>
            <div className="col-6">
              <p>Plan A</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h2>Start Date: </h2>
            </div>
            <div className="col-6">
              <p>September 20, 2019</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h2>End Date: </h2>
            </div>
            <div className="col-6">
              <p>January 20, 2020</p>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <h2>Days: </h2>
            </div>
            <div className="col-6">
              <p>Monday - Thursday</p>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <h2>Time: </h2>
            </div>
            <div className="col-6">
              <p>10:00 AM - 5:00 PM</p>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <h2>Promo: </h2>
            </div>
            <div className="col-6">
              <p>FIRST07A</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return modals;
};

export default MyEnrollmentModal;
