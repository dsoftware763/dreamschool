import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.png"
import FamilyProfile from "../../assets/images/familyprofile.svg"
import ProgramSetup from "../../assets/images/ProgramSetup.svg"
import PricingPlans from "../../assets/images/PricingPlans.svg"
import Milestones from "../../assets/images/Milestones.svg"
import TourRequests from "../../assets/images/TourRequests.svg"
import Applications from "../../assets/images/Applications.svg"
import Connections from "../../assets/images/Connections.svg"
import Enrolled from "../../assets/images/Enrolled.svg"
import Attendance from "../../assets/images/Attendance.svg"
import WeeklySlots from "../../assets/images/WeeklySlots.svg"
import MyEarnings from "../../assets/images/MyEarnings.svg"
import FamilyPayments from "../../assets/images/FamilyPayments.svg"
import PaymentSettings from "../../assets/images/PaymentSettings.svg"
import ExpenseTracker from "../../assets/images/ExpenseTracker.svg"
import LogoutBg from "../../assets/images/logoutbg.svg"
import familyprofile from '../../assets/images/familyprofile.svg';
import paymentmethods from '../../assets/images/paymentmethods.svg';
import programsettings from '../../assets/images/programsettings.svg';
import ProgramOperations from '../../assets/images/ProgramOperations.svg';
import InterestedPrograms from '../../assets/images/InterestedPrograms.svg';
import Enrollments from '../../assets/images/Enrollments.svg';
import Profiles from '../../assets/images/Profiles.svg';

const SideBar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/educator">
                <img src={Logo} alt="" />
            </Link>

            <hr className="sidebar-divider my-0" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                ACCOUNT
            </div> 

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/educator/prescreening">
                    <img src={familyprofile} alt=""/>
                    <span>Pre-Screening</span>
                </Link>       
                <Link className="nav-link" to="/educator/applications">
                    <img src={paymentmethods} alt=""/>
                    <span>Applications</span>
                </Link>      
                <Link className="nav-link" to="/educator/program-settings">
                    <img src={programsettings} alt=""/>
                    <span>Program Settings</span>
                </Link>
                <Link className="nav-link" to="/educator/program-operations">
                    <img src={ProgramOperations} alt=""/>
                    <span>Program Operations</span>
                </Link>
            </li>


        <hr className="sidebar-divider my-0" />

        {/* <!-- Heading --> */}
      <div className="sidebar-heading">
        FAMILIES
      </div>

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to="/educator/interested-programs">
          <img src={InterestedPrograms} alt=""/>
          <span>Interested Programs</span>
        </Link>
        <Link className="nav-link" to="/educator/family-profiles">
          <img src={Profiles} alt=""/>
          <span>Profiles</span>
        </Link>
        <Link className="nav-link" to="/educator/family-applications">
          <img src={paymentmethods} alt=""/>
          <span>Applications</span>
        </Link>
         <Link className="nav-link" to="/educator/family-enrollments">
          <img src={Enrollments} alt=""/>
          <span>Enrollments</span>
        </Link>
      </li>

      <hr className="sidebar-divider my-0" />

        <div className="sidebar-heading">PROFILE</div>

            <li className="nav-item active">
                <Link className="nav-link" to="/educator/my-applications">
                    <img src={FamilyProfile} alt="" />
                    <span>My Application</span>
                </Link>
                <a className="nav-link" href="#">
                    <img src={ProgramSetup} alt="" />
                    <span>Program Setup</span>
                </a>
                <Link className="nav-link" to="/educator/pricing-plans">
                    <img src={PricingPlans} alt="" />
                    <span>Pricing Plans</span>
                </Link>
                <Link className="nav-link" to="/educator/milestones">
                    <img src={Milestones} alt="" />
                    <span>Milestones</span>
                </Link>
            </li>


            <hr className="sidebar-divider my-0" />

            <div className="sidebar-heading">MY LEADS</div>

            <li className="nav-item active">
                <Link className="nav-link" to="/educator/tour-requests">
                    <img src={TourRequests} alt="" />
                    <span>Tour Requests</span>
                </Link>
                <a className="nav-link" href="#">
                    <img src={Applications} alt="" />
                    <span>Applications</span>
                </a>
                <a className="nav-link" href="#">
                    <img src={Connections} alt="" />
                    <span>Connections</span>
                </a>
            </li>

            <hr className="sidebar-divider my-0" />
            
            <div className="sidebar-heading">ENROLLMENT</div>

            
            <li className="nav-item active">
                <Link className="nav-link" to="/educator/enrolled">
                    <img src={Enrolled} alt="" />
                    <span>Enrolled</span>
                </Link>
                <Link className="nav-link" to="/educator/attendance">
                    <img src={Attendance} alt="" />
                    <span>Attendance</span>
                </Link>
                <Link className="nav-link" to="/educator/weekly-slots">
                    <img src={WeeklySlots} alt="" />
                    <span>Weekly Slots</span>
                </Link>
            </li>

            <hr className="sidebar-divider my-0" />

            <div className="sidebar-heading">FINANCES</div>

            <li className="nav-item active">
                <Link className="nav-link" to="/educator/my-earnings">
                    <img src={MyEarnings} alt="" />
                    <span>My Earnings</span>
                </Link>
                <a className="nav-link" href="#">
                    <img src={FamilyPayments} alt="" />
                    <span>Family Payments</span>
                </a>
                <a className="nav-link" href="#">
                    <img src={ExpenseTracker} alt="" />
                    <span>Expense Tracker</span>
                </a>
                <a className="nav-link" href="#">
                    <img src={PaymentSettings} alt="" />
                    <span>Payment Settings</span>
                </a>
            </li>

            <div className="logoutbtn">
                <a href="#">Log Out</a>
                <img src={LogoutBg} alt="" />
            </div>
        </ul>
    )
}

export default SideBar