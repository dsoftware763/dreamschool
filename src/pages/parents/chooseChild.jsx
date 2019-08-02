import React from "react";
import {Link} from 'react-router-dom';
import johnnychild from '../../assets/images/johnnychild.png';
import jasminechild from '../../assets/images/jasminechild.png';

class ChooseChild extends React.PureComponent {
  render () {
    return (
      <div className="container-fluid new_application new_application_2">
         <div className="row">
          <div className="col-md-12">
          <h1>New Application</h1>
          </div>
        </div>
        <div className="cont">
          <div className="contbox">
              <p className="nom">2</p>
              <div className="header">
                <h2>Choose a Child</h2>
                  <p>Select which child you are applying for</p>
              </div>
              <div className="body">
                <div className="row">
                  <div className="col-6">
                    <p>My Children</p>
                  </div>
                    
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="boxes">
                          
                      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="box">
                              <div className="divforimg">
                                <img src={johnnychild} alt=""/>
                              </div>
                              <h2>Emily’s Dreamschool</h2>
                              <a href="#" className="selected">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="13.754" height="13" viewBox="0 0 13.754 13">
                                  <g id="Group_800" data-name="Group 800" transform="translate(-939 -754)">
                                    <g id="Ellipse_1040" data-name="Ellipse 1040" transform="translate(939 754)" fill="none" stroke="" stroke-width="1.5">
                                      <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
                                      <circle cx="6.5" cy="6.5" r="6" fill="none"/>
                                    </g>
                                    <path id="Path_1429" data-name="Path 1429" d="M3555.464,4000.681l3.458,3.642,6.47-6.782" transform="translate(-2613 -3242)" fill="none" stroke="" stroke-width="1.5"/>
                                  </g>
                                </svg>
                                Selected
                              </a>
                            </div>
                            <div className="box">
                              <div className="divforimg">
                                <img src={jasminechild} alt=""/>
                              </div>
                              <h2>Jasmine Appleseed</h2>
                              <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="13.754" height="13" viewBox="0 0 13.754 13">
                                  <g id="Group_800" data-name="Group 800" transform="translate(-939 -754)">
                                    <g id="Ellipse_1040" data-name="Ellipse 1040" transform="translate(939 754)" fill="none" stroke="" stroke-width="1.5">
                                      <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
                                      <circle cx="6.5" cy="6.5" r="6" fill="none"/>
                                    </g>
                                    <path id="Path_1429" data-name="Path 1429" d="M3555.464,4000.681l3.458,3.642,6.47-6.782" transform="translate(-2613 -3242)" fill="none" stroke="" stroke-width="1.5"/>
                                  </g>
                                </svg>

                                Select
                              </a>
                            </div>

                          </div>
                              
                        </div>

                      </div>

                    </div>  
                  </div>
                </div>
              </div>
            <div className="row">
              <div className="col-md-12">
                <div className="buttons">
                  <a href="#" className="nextbtn">SAVE</a>
                  <Link to="/parents/interested-programs/new" className="savebtn">BACK</Link>
                  <Link to="/parents/interested-programs/step3" className="savebtn">NEXT</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};

export default ChooseChild;
