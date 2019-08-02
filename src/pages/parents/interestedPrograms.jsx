import React from "react";
import interested_program_img from '../../assets/images/interested_program_img.png';
import hearticon from '../../assets/images/hearticon.svg';

const Application = () => {
  return (
    <div className="container-fluid interested_programs">
     	<div className="row">
        <div className="col-md-12">
          <h1>Interested Programs</h1>
        </div>
      </div>
      <div className="cont">
				<div className="boxes">
          {[1,2,3,4,5].map(item => {
            return (
              <div className="box">
            <div className="imghere">
              <div className="divforimg">
                <img src={interested_program_img} alt=""/>
                <div className="paragraph">
                  <p>Emily’s Dreamschool</p>
                </div>

                <img src={hearticon} className="heart" alt=""/>
              </div>
            </div>

            <div className="continbox">
              <div className="row">
                <div className="col-4">
                  <h2>Completed: </h2>
                </div>
                <div className="col-8">
                  <p>Request Tour</p>
                </div>
              </div>
            </div>
            <div className="continbox">
              <div className="row">
                <div className="col-4">
                  <h2>Next Step: </h2>
                </div>
                <div className="col-8">
                  <p><a href="#">APPLY</a></p>
                </div>
              </div>
            </div>
          </div>
            )
          })}
          
        </div>
			</div>
    </div>
  );
};

export default Application;
