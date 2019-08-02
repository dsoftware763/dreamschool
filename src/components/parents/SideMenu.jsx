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
        <Link className="nav-link" to="/parents/family-profile">
          <img src={FamilyProfile} alt="family"/>
          <span>Family Profile</span>
      	</Link>
        <Link className="nav-link" to="/parents/payment-methods">
          <img src={PaymentMethods} alt="payment"/>
          <span>Payment Methods</span>
      	</Link>
        <Link className="nav-link" to="/parents/account-settings">
          <img src={AccountSettings} alt="account"/>
          <span>Account Settings</span>
      	</Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0"/>

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">
        PROGRAM
      </div>

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to="/parents/interested-programs">
          <img src={intprog} alt=""/>
          <span>Interested Programs</span>
      	</Link>
        <Link className="nav-link" to="/parents/applications">
          <img src={applicationsicon} alt=""/>
          <span>Applications</span>
      	</Link>
        <Link className="nav-link" to="/parents/tuition-payments">
          <img src={PaymentMethods} alt=""/>
          <span>Tuition Payments</span>
      	</Link>
      	 <Link className="nav-link" to="/parents/my-enrollments">
      	  <img src={myenroll} alt=""/>
      	  <span>My Enrollments</span>
      	</Link>
      </li>
      <div className="logoutbtn">
			<a href="#">Log Out</a>
			<img src={logoutbg} alt=""/>
		</div>

    </> );
}

export default SideMenu;