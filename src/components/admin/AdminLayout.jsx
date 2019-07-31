import React from 'react';
import './css/all.min.css';
import './css/sb-admin-2.min.css';
import Sidebar from '../common/Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';
import LogoutModal from './LogoutModal';
import SideMenu from './SideMenu';
const AdminLayout = (props) => {
    const {path} = props.match
    return (<>

        <Sidebar path={path} Menu={SideMenu}/>
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
           {/* Main Content */}
            <div id="content">
                <Topbar/>
                {props.children}
            </div>
            <Footer/>
        </div>
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>
    <LogoutModal/>
    </>);
}

export default AdminLayout;