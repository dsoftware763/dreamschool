import React from 'react';
import {Link} from 'react-router-dom';

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
          <img src="img/familyprofile.svg" alt=""/>
          <span>Family Profile</span>
      	</a>
        <a className="nav-link" href="index.html">
          <img src="img/paymentmethods.svg" alt=""/>
          <span>Payment Methods</span>
      	</a>
        <a className="nav-link" href="index.html">
          <img src="img/accountsettings.svg" alt=""/>
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
          <img src="img/intprog.svg" alt=""/>
          <span>Interested Programs</span>
      	</a>
        <a className="nav-link" href="index.html">
          <img src="img/applicationsicon.svg" alt=""/>
          <span>Applications</span>
      	</a>
        <a className="nav-link" href="index.html">
          <img src="img/paymentmethods.svg" alt=""/>
          <span>Tuition Payments</span>
      	</a>
      	 <a className="nav-link" href="index.html">
      	  <img src="img/myenroll.svg" alt=""/>
      	  <span>My Enrollments</span>
      	</a>
      </li>
      <div className="logoutbtn">
			<a href="">Log Out</a>
			<img src="img/logoutbg.svg" alt=""/>
		</div>

    </> );
}

export default SideMenu;