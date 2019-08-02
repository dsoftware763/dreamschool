import React from "react";
import ViewPreviousPlans from "../../assets/images/ViewPreviousPlans.svg"
import addnew from "../../assets/images/addnew.svg"
import PricingPlanModal from "../../components/modals/PricingPlanModal"

const PricingPlans = () => {
  return (
    <div className="admin">
      <div className="container-fluid pricingplan">
        <div className="row">
          <div className="col-md-12">
            <h1>Pricing Plans</h1>
            <div className="forbtnapp">
              <a href="#" className="newapplications">
                <img src={ViewPreviousPlans} alt="" />
                View Previous Plans
              </a>
            </div>
          </div>
        </div>

        <div className="cont">
          <div className="boxes">

            <PricingPlanModal />
            
            <a href="#" className="addnew">
              <img src={addnew} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
