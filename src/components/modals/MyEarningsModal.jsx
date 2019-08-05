import React from "react";

const MyEarningsModal = () => {
  return (
    <div className="boxes">
      <div className="box">
        <h2>LAST DEPOSIT</h2>
        <div className="info">
          <h3>$1572.80</h3>
          <p>Deposited March 23 2019</p>
        </div>
      </div>
      <div className="box">
        <h2>NEXT DEPOSIT</h2>
        <div className="info">
          <h3>$1412.00</h3>
          <p>Scheduled to deposit March 30 2019</p>
        </div>
      </div>
      <div className="box">
        <h2>CUMULATIVE AMOUNT</h2>
        <div className="info">
          <h3>$1412.00</h3>
          <p>Cumulative total since March 2018</p>
        </div>
      </div>
    </div>
  );
};

export default MyEarningsModal;
