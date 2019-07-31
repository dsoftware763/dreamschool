import React from "react";
import TuitionPaymentTable from "../../components/table/TuitionPaymentTable"
import TuitionPaymentOverview from "../../components/table/TuitionPaymentOverview"

const TuitionPayments = () => {
  return (
    <div className="container-fluid tuition_payments">
      <div className="row">
        <div className="col-md-12">
          <h1>Tuition Payments</h1>
        </div>
      </div>

      <div className="cont">
        <div className="row">
          <div className="col-lg-3-new">
            <TuitionPaymentOverview />
          </div>
          <div className="col-lg-9-new">
            <TuitionPaymentTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionPayments;
