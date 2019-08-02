import React from "react";
import EnrolledTable from "../../components/table/EnrolledTable"


const Enrolled = () => {
  return (
    <div className="admin">
      <div className="container-fluid enrolled">
        <div className="row">
          <div className="col-md-12">
            <h1>Enrolled</h1>
          </div>
        </div>
            <EnrolledTable />
       </div>
    </div>
  );
};

export default Enrolled;
