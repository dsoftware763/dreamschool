import React from "react";
import EducatorRoute from "../../routes/educatorRoute";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Home from "../../pages/educator/home";
import Enrolled from "../../pages/educator/enrolled";
import Milestones from "../../pages/educator/milestones";
import MyApplication from "../../pages/educator/myApplications";
import PricingPlans from "../../pages/educator/pricingPlans";
import TourRequests from "../../pages/educator/tourRequests";
import Attendance from "../../pages/educator/attendance";
import MyEarnings from "../../pages/educator/myEarnings";
import WeeklySlots from "../../pages/educator/weeklySlots";
import Messaging from "../../pages/educator/messaging";

const EducatorLayout = props => {
  require("../admin/css/sb-admin-2.css");
  require("./css/educator.css");

  return (
    <div className="educator">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <EducatorRoute
            educator={true}
            exact
            path="/educator"
            component={Home}
          />
          <EducatorRoute
            educator={true}
            exact
            path="/educator/enrolled"
            component={Enrolled}
          />
          <EducatorRoute
            educator={true}
            exact
            path="/educator/milestones"
            component={Milestones}
          />
          <EducatorRoute
            educator={true}
            exact
            path="/educator/my-applications"
            component={MyApplication}
          />
          <EducatorRoute
            educator={true}
            exact
            path="/educator/pricing-plans"
            component={PricingPlans}
          />
          <EducatorRoute
            educator={true}
            exact
            path="/educator/tour-requests"
            component={TourRequests}
          />
          <EducatorRoute
            educator={true}
            exact
            path="/educator/attendance"
            component={Attendance}
          />
          <EducatorRoute
            educator={true}
            exact
            path="/educator/my-earnings"
            component={MyEarnings}
          />
		  <EducatorRoute
            educator={true}
            exact
            path="/educator/weekly-slots"
            component={WeeklySlots}
          />
		  <EducatorRoute
            educator={true}
            exact
            path="/educator/messaging"
            component={Messaging}
          />
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
    </div>
  );
};

export default EducatorLayout;
