import React from "react";
import NewApplicationBtn from "../../assets/images/newapplicationsbtn.svg";
import Table from "../../components/table/Table";

const Application = () => {
  return (
    <div className="container-fluid applications">
      <div className="row">
        <div className="col-md-6">
          <h1>Applications</h1>
        </div>
        <div className="col-md-6">
          <div className="forbtnapp">
            <a href="#" className="newapplications">
              <img src={NewApplicationBtn} alt="" />
              New Application
            </a>
          </div>
        </div>
      </div>

      <Table />
    </div>
  );
};

export default Application;
