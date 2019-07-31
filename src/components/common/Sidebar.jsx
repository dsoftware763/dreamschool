import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Sidebar = (props) => {
  const {Menu, path} = props
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
          <Link className="sidebar-brand d-flex align-items-center justify-content-center" to={path}>
            {path === '/admin' ? <>
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
              </div>
              <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div> </> :
              <img src={Logo} alt="logo"/>
          }
           
          </Link>
    
        
          <hr className="sidebar-divider my-0"/>
    
          <Menu/>

         
    
       
    
        </ul>
        )
        //  End of Sidebar
    
}

export default Sidebar;