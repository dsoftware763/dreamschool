import React from "react";
import {Link} from 'react-router-dom';
import interested_program_img from '../../assets/images/interested_program_img.png';
import arrowleftslidera from '../../assets/images/arrowleftslidera.svg';
import arrowrightslider from '../../assets/images/arrowrightslider.svg';
import searchicon from '../../assets/images/searchicon.svg';

class Application extends React.PureComponent  {
  render () {
    return (
      <div className="container-fluid new_application">
         <div className="row">
          <div className="col-md-12">
          <h1>New Application</h1>
          </div>
        </div>
        <div className="cont">
          <div className="contbox">
              <p className="nom">1</p>
              <div className="header">
                  <h2>Choose a Program</h2>
                  <p>Select which Dreamschool you’re applying to</p>
              </div>
              <div className="body">
                  <div className="row">
                      <div className="col-6">
                          <p>Interested Programs</p>
                      </div>
                      <div className="col-6">
                          <div className="inputdiv">
                            <input type="text" placeholder="Or search for a program"/>
                            <img src={searchicon} alt=""/>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-12">
                          <div className="boxes">
                              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                  <div className="carousel-inner">
                                      <div className="carousel-item active">
                                          {[1,2,3,4].map((item,key) => {
                                              return (
                                              <div className="box" key={key}>
                                                  <img src={interested_program_img} alt=""/>
                                                  <h2>Emily’s Dreamschool</h2>
                                                  <a href="#" className="selected">
                                                      <svg xmlns="http://www.w3.org/2000/svg"  width="13.754" height="13" viewBox="0 0 13.754 13">
                                                          <g id="Group_800" data-name="Group 800" transform="translate(-939 -754)">
                                                              <g id="Ellipse_1040" data-name="Ellipse 1040" transform="translate(939 754)" fill="none" stroke="" strokeWidth="1.5">
                                                                  <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
                                                                  <circle cx="6.5" cy="6.5" r="6" fill="none"/>
                                                              </g>
                                                              <path id="Path_1429" data-name="Path 1429" d="M3555.464,4000.681l3.458,3.642,6.47-6.782" transform="translate(-2613 -3242)" fill="none" stroke="" strokeWidth="1.5"/>
                                                          </g>
                                                      </svg>
  
                                                      Selected
                                                  </a>
                                              </div>
                                              )
                                          })}
                                          
                                      </div>
                                <div className="carousel-item">
                                  {[1,2,3,4].map((item, key) => {
                                      return (
                                          <div className="box" key={key}>
                                              <img src={interested_program_img} alt=""/>
                                              <h2>Emily’s Dreamschool</h2>
                                              <a href="#" className="selected">
                                                  <svg xmlns="http://www.w3.org/2000/svg"  width="13.754" height="13" viewBox="0 0 13.754 13">
                                                      <g id="Group_800" data-name="Group 800" transform="translate(-939 -754)">
                                                          <g id="Ellipse_1040" data-name="Ellipse 1040" transform="translate(939 754)" fill="none" stroke="" strokeWidth="1.5">
                                                              <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
                                                              <circle cx="6.5" cy="6.5" r="6" fill="none"/>
                                                          </g>
                                                          <path id="Path_1429" data-name="Path 1429" d="M3555.464,4000.681l3.458,3.642,6.47-6.782" transform="translate(-2613 -3242)" fill="none" stroke="" strokeWidth="1.5"/>
                                                      </g>
                                                  </svg>
  
                                                  Selected
                                              </a>
                                          </div>
                                      )
                                  })}
                                </div>
                              </div>
  
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                  <img src={arrowrightslider} alt=""/>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                  <img src={arrowleftslidera} alt=""/>
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="buttons">
                    <a href="#" className="nextbtn">SAVE</a>
                    <Link to="/parents/interested-programs/choose-child" className="savebtn">NEXT</Link>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }

};

export default Application;
