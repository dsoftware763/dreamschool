import React from "react";
import { Link } from "react-router-dom"
import MyEnrollmentCalendar from "../../components/calendar/MyEnrollments";

const MyEnrollmentEnd = () => {
  return (
    <div class="container-fluid end_enrollment_calendar">
      <div class="row">
        <div class="col-md-12">
          <h1>End Enrollment</h1>
        </div>
      </div>

      <div class="cont calendarcf">
        <div class="contbox">
          <div class="header">
            <h2>Select End Date</h2>
          </div>

          <MyEnrollmentCalendar />

          <div class="row">
            <div class="col-md-12">
              <div class="buttons">
                <Link to="/parents/my-enrollments/view" href="" class="savebtn">
                  END
                </Link>
                <Link to="/parents/my-enrollments/view" class="nextbtn">
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
