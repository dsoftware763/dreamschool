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
            </div>
           
        </div>
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

    </>);
}

export default ParentLayout;