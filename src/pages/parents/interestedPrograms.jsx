import React from "react";
import interested_program_img from '../../assets/images/interested_program_img.png';
import hearticon from '../../assets/images/hearticon.svg';

const Application = () => {
  return (
    <div className="container-fluid interested_programs">
     	<div class="row">
        <div class="col-md-12">
          <h1>Interested Programs</h1>
        </div>
      </div>
      <div class="cont">
				<div class="boxes">
          {[1,2,3,4,5].map(item => {
            return (
              <div class="box">
            <div class="imghere">
              <div class="divforimg">
                <img src={interested_program_img} alt=""/>
                <div class="paragraph">
                  <p>Emily’s Dreamschool</p>
                </div>

                <img src={hearticon} class="heart" alt=""/>
              </div>
            </div>

            <div class="continbox">
              <div class="row">
                <div class="col-4">
                  <h2>Completed: </h2>
                </div>
                <div class="col-8">
                  <p>Request Tour</p>
                </div>
              </div>
            </div>
            <div class="continbox">
              <div class="row">
                <div class="col-4">
                  <h2>Next Step: </h2>
                </div>
                <div class="col-8">
                  <p><a href="">APPLY</a></p>
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
