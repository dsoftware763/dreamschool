import React from "react";
import MyEnrollmentModal from "../../components/modals/MyEnrollmentModal"

const MyEnrollments = () => {
  return (
    <div className="container-fluid my_enrollments">
      <div className="row">
        <div className="col-md-12">
          <h1>My Enrollments</h1>
        </div>
      </div>

      <div className="cont">
        <div className="boxes">
            <MyEnrollmentModal count={3} />
        </div>
      </div>
    </div>
  );
};

export default MyEnrollments;
