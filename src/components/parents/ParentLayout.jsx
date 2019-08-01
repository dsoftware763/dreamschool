import React from 'react';
import Sidebar from '../common/Sidebar';
import '../admin/css/all.min.css'
import '../admin/css/sb-admin-2.min.css';
import SideMenu from './SideMenu';
import Topbar from './Topbar';
import ParentRoute from '../../routes/parentRoute';
import Home from '../../pages/parents/home';
import Calendar from '../../pages/parents/calendar';
import PaymentMethods from '../../pages/parents/paymentMethods';
import AccountSettings from '../../pages/parents/accountSettings';
import Application from '../../pages/parents/applications';
import ApplicationView from '../../pages/parents/application-view';
import InterestedPrograms from '../../pages/parents/interestedPrograms';
import NewApplication from '../../pages/parents/newApplication';
import TuitionPayments from '../../pages/parents/tuitionPayments';
import TuitionPaymentsDetails from '../../pages/parents/tuitionPaymentsDetails';
import MyEnrollments from '../../pages/parents/myEnrollments';
import MyEnrollmentDetails from '../../pages/parents/myEnrollmentDetails';
import MyEnrollmentEnd from '../../pages/parents/myEnrollmentEnd';

const ParentLayout = (props) => {
    const {path} = props.match
   
    if(path === '/parents') {
        require('./css/parent_css.css');
    }
    return (<>

        <Sidebar path={path} Menu={SideMenu}/>
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
           {/* Main Content */}
            <div id="content">
                <Topbar/>

                <ParentRoute
                    parent={true}
                    exact
                    path="/parents"
                    component={Home}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/calendar"
                    component={Calendar}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/payment-methods"
                    component={PaymentMethods}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/applications"
                    component={Application}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/account-settings"
                    component={AccountSettings}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/interested-programs"
                    component={InterestedPrograms}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/interested-programs/new"
                    component={NewApplication}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/applications/view"
                    component={ApplicationView}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/tuition-payments"
                    component={TuitionPayments}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/tuition-payments/view"
                    component={TuitionPaymentsDetails}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/my-enrollments"
                    component={MyEnrollments}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/my-enrollments/view"
                    component={MyEnrollmentDetails}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/my-enrollments/end"
                    component={MyEnrollmentEnd}
                />
            </div>
           
        </div>
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

    </>);
}

export default ParentLayout;