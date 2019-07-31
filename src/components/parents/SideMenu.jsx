import React from 'react';
import {Link} from 'react-router-dom';
import FamilyProfile from '../../assets/images/familyprofile.svg';
import PaymentMethods from '../../assets/images/paymentmethods.svg';
import AccountSettings from '../../assets/images/accountsettings.svg';
import intprog from '../../assets/images/intprog.svg';
import applicationsicon from '../../assets/images/applicationsicon.svg';
import myenroll from '../../assets/images/myenroll.svg';
import logoutbg from '../../assets/images/logoutbg.svg';

const SideMenu = () => {
    return (<>
    {/* <!-- Divider --> */}
    <hr className="sidebar-divider my-0"/>

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
        ACCOUNT
        </div>    
        {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <img src={FamilyProfile} alt="family"/>
          <span>Family Profile</span>
      	</a>
        <a className="nav-link" href="index.html">
          <img src={PaymentMethods} alt="payment"/>
          <span>Payment Methods</span>
      	</a>
        <a className="nav-link" href="index.html">
          <img src={AccountSettings} alt="account"/>
          <span>Account Settings</span>
      	</a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0"/>

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">
        PROGRAM
      </div>

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <img src={intprog} alt=""/>
          <span>Interested Programs</span>
      	</a>
        <a className="nav-link" href="index.html">
          <img src={applicationsicon} alt=""/>
          <span>Applications</span>
      	</a>
        <a className="nav-link" href="index.html">
          <img src={PaymentMethods} alt=""/>
          <span>Tuition Payments</span>
      	</a>
      	 <a className="nav-link" href="index.html">
      	  <img src={myenroll} alt=""/>
      	  <span>My Enrollments</span>
      	</a>
      </li>
      <div className="logoutbtn">
			<a href="">Log Out</a>
			<img src={logoutbg} alt=""/>
		</div>

    </> );
}

export default SideMenu;