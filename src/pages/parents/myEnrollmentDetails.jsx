import React from "react";
import MyEnrollmentDetailsModals from "../../components/modals/MyEnrollmentDetailsModal"

const MyEnrollmentDetails = () => {
  return (
    <div className="container-fluid new_application new_application_3">
      <div className="row">
        <div className="col-md-12">
          <h1>View Enrollment Details</h1>
        </div>
      </div>
        <MyEnrollmentDetailsModals />
      </div>
  );
};

export default MyEnrollmentDetails;
