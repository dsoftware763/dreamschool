import React from 'react';
import noticon from '../../assets/images/noticon.svg';
import arrowtop from '../../assets/images/arrowtop.png';
import minarrow from '../../assets/images/minarrow.svg';
import notimg1 from '../../assets/images/notimg1.svg';
import notimg2 from '../../assets/images/notimg2.svg';
import notimg3 from '../../assets/images/notimg3.svg';
import notimg4 from '../../assets/images/notimg4.svg';
import notimg5 from '../../assets/images/notimg5.svg';
import msgicon from '../../assets/images/msgicon.svg';
import calendaricon from '../../assets/images/calendaricon.svg';
import keisha from '../../assets/images/keisha.svg';

const Topbar = () => {
    return (
        // Topbar
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>


        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">




          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - Alerts --> */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={noticon} alt=""/>
              <div className="bluecircletop2"></div>

            </a>
            {/* <!-- Dropdown - Alerts --> */}
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
              <img className="arrowtop" src={arrowtop} alt=""/>
              <div className="boxofit">
              <h6 className="dropdown-header">
                <div className="row">
                  <div className="col-7">
                    Notifications
                  </div>
                  <div className="col-5">
                    <div className="recent">
                      <div className="pbno">4</div>
                      Recent
                      <img src={minarrow} className="minarrow" alt=""/>
                    </div>
                  </div>
                </div>
              </h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="">
                      <img src={notimg1} alt=""/>
                    </div>
                  </div>
                  <div>
                    <span className="titleofnot">Change in Program Profile</span>
                    <div className="descofnot">Emily’s Dreamschool</div>
                  </div>
                  <p className="hours">1 hour ago</p>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="">
                      <img src={notimg2} alt=""/>
                    </div>
                  </div>
                  <div>
                    <span className="titleofnot">Tour Request Accepted</span>
                    <div className="descofnot">Ladybug Dreamschool</div>
                  </div>
                  <p className="hours">3 hour ago</p>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="">
                      <img src={notimg3} alt=""/>
                    </div>
                  </div>
                  <div>
                    <span className="titleofnot">Enrollment Application Accepted</span>
                    <div className="descofnot">Emily’s Dreamschool</div>
                  </div>
                  <p className="hours">4 hour ago</p>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="">
                      <img src={notimg4} alt=""/>
                    </div>
                  </div>
                  <div>
                    <span className="titleofnot">Enrollment Paid</span>
                    <div className="descofnot">To Emily’s Dreamschool</div>
                  </div>
                  <p className="hours">5 hour ago</p>
                </a>

                <a className="dropdown-item d-flex align-items-center clicked" href="#">
                  <div className="mr-3">
                    <div className="">
                      <img src={notimg1} alt=""/>
                    </div>
                  </div>
                  <div>
                    <span className="titleofnot">Change in Program Profile</span>
                    <div className="descofnot">Emily’s Dreamschool</div>
                  </div>
                  <p className="hours">1 hour ago</p>
                </a>
                <a className="dropdown-item d-flex align-items-center clicked" href="#">
                  <div className="mr-3">
                    <div className="">
                      <img src={notimg5} alt=""/>
                    </div>
                  </div>
                  <div>
                    <span className="titleofnot">Change in Program Profile</span>
                    <div className="descofnot">Emily’s Dreamschool</div>
                  </div>
                  <p className="hours">1 hour ago</p>
                </a>

              </div>
            </div>
          </li>


          <div className="topbar-divider d-none d-sm-block"></div>

          
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle nameofc" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={msgicon} alt=""/>
              <div className="bluecircletop"></div>
            </a>
          </li>


          <div className="topbar-divider d-none d-sm-block"></div>

          
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle nameofc" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={calendaricon} alt=""/>
              <div className="bluecircletop"></div>
            </a>
          </li>
          <div className="topbar-divider d-none d-sm-block"></div>
          <li className="nav-item dropdown no-arrow">
              <a className="nav-link dropdown-toggle nameofc" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="img-profile rounded-circle" src={keisha}/>
                <div className="bluecircle"></div>
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Keisha Thompson</span>
              </a>
          </li>
          

        </ul>

      </nav>
       
    );
}

export default Topbar;