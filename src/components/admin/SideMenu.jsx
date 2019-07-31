import React from 'react';
import {Link} from 'react-router-dom';

const SideMenu = () => {
    return (<>
           {/* Nav Item - Dashboard */}
           <li className="nav-item active">
           <Link className="nav-link" to="/admin">
             <i className="fas fa-fw fa-tachometer-alt"></i>
             <span>Dashboard</span>
           </Link>
         </li>
   
         {/* Divider */}
         <hr className="sidebar-divider"/>
   
         {/* Heading */}
         <div className="sidebar-heading">
           Interface
         </div>
   
         {/* Nav Item - Pages Collapse Menu */}
         <li className="nav-item">
           <Link className="nav-link collapsed" to="/admin" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
             <i className="fas fa-fw fa-cog"></i>
             <span>Components</span>
           </Link>
           <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
             <div className="bg-white py-2 collapse-inner rounded">
               <h6 className="collapse-header">Custom Components:</h6>
               <Link className="collapse-item" to="/buttons">Buttons</Link>
               <Link className="collapse-item" to="/cards">Cards</Link>
             </div>
           </div>
         </li>
   
         {/* Nav Item - Utilities Collapse Menu */}
         <li className="nav-item">
           <Link className="nav-link collapsed" to="/utilities" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
             <i className="fas fa-fw fa-wrench"></i>
             <span>Utilities</span>
           </Link>
           <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
             <div className="bg-white py-2 collapse-inner rounded">
               <h6 className="collapse-header">Custom Utilities:</h6>
               <Link className="collapse-item" to="/colors">Colors</Link>
               <Link className="collapse-item" to="/border">Borders</Link>
               <Link className="collapse-item" to="/animation">Animations</Link>
               <Link className="collapse-item" to="/others">Other</Link>
             </div>
           </div>
         </li>
   
         {/* Divider */}
         <hr className="sidebar-divider"/>
         {/* Heading */}
         <div className="sidebar-heading">
           Addons
         </div>
   
         {/* Nav Item - Pages Collapse Menu  */}
         <li className="nav-item">
           <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
             <i className="fas fa-fw fa-folder"></i>
             <span>Pages</span>
           </a>
           <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
             <div className="bg-white py-2 collapse-inner rounded">
               <h6 className="collapse-header">Login Screens:</h6>
               <Link className="collapse-item" to="login">Login</Link>
               <Link className="collapse-item" to="/register">Register</Link>
               <Link className="collapse-item" to="/forgot-password">Forgot Password</Link>
               <div className="collapse-divider"></div>
               <h6 className="collapse-header">Other Pages:</h6>
               <Link className="collapse-item" to="/404">404 Page</Link>
               <Link className="collapse-item" to="/blank">Blank Page</Link>
             </div>
           </div>
         </li>
   
         {/* Nav Item - Charts */}
         <li className="nav-item">
           <Link className="nav-link" to="/charts">
             <i className="fas fa-fw fa-chart-area"></i>
             <span>Charts</span>
           </Link>
         </li>
   
         {/* Nav Item - Tables */}
         <li className="nav-item">
           <a className="nav-link" href="tables.html">
             <i className="fas fa-fw fa-table"></i>
             <span>Tables</span></a>
         </li>
         <hr className="sidebar-divider d-none d-md-block"/>
          {/* Sidebar Toggler (Sidebar) */}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
         
   </> );
}

export default SideMenu;