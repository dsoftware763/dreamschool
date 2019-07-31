import React from "react";

const PaymentDetailsModal = () => {
  return (
    <div className="cont">
      <div className="boxpaid">
        <div className="box">
          <div className="header">
            <h2>PAYMENT #006 </h2>
            <p>Invoice #000042-006</p>
            <p className="paid">PAID</p>
          </div>
          <div className="body">
            <div className="info">
              <div className="row">
                <div className="col-6">
                  <p>
                    <span>By: </span>
                  </p>
                </div>
                <div className="col-6">
                  <p>Keisha Thompson</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>
                    <span>For: </span>
                  </p>
                </div>
                <div className="col-6">
                  <p>Clarissa Thompson </p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>
                    <span>Service Period: </span>
                  </p>
                </div>
                <div className="col-6">
                  <p>June 1 - June 8 2019</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>
                    <span>Due Date: </span>
                  </p>
                </div>
                <div className="col-6">
                  <p>June 10 2019</p>
                </div>
              </div>
            </div>
            <div className="tablediv">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Amount</th>
                      <th scope="col">Type</th>
                      <th scope="col">Date Charged</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">$250.00</th>
                      <td>Tuition</td>
                      <td>June 1 2019</td>
                    </tr>
                    <tr>
                      <th scope="row">$25.00</th>
                      <td>Late Fee</td>
                      <td>May 28 2019</td>
                    </tr>
                    <tr>
                      <th scope="row">($32.50)</th>
                      <td>Discount</td>
                      <td>May 27 2019</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h3>Total Gross Amount: $250.00</h3>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsModal