import React from "react";
import { Link } from "react-router-dom"
import MyEnrollmentCalendar from "../../components/calendar/MyEnrollments";

const MyEnrollmentEnd = () => {
  return (
    <div className="container-fluid end_enrollment_calendar">
      <div className="row">
        <div className="col-md-12">
          <h1>End Enrollment</h1>
        </div>
      </div>

      <div className="cont calendarcf">
        <div className="contbox">
          <div className="header">
            <h2>Select End Date</h2>
          </div>

          <MyEnrollmentCalendar />

          <div className="row">
            <div className="col-md-12">
              <div className="buttons">
                <Link to="/parents/my-enrollments/view" href="#" className="savebtn">
                  END
                </Link>
                <Link to="/parents/my-enrollments/view" className="nextbtn">
                  CANCLE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEnrollmentEnd;
