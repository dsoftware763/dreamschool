import React from "react";
import MyApplicationModal from "../../components/modals/MyApplicationModal"

const MyApplication = () => {
  return (
    <div className="container-fluid mychildhero">
      <h1>
        My Application: <span>Profile</span>
      </h1>

      <div className="completeline">
        <p>12% Complete</p>
        <div className="complete">
          <div className="completed" />
          <div className="circle1 activeblue" />
          <div className="circle2" />
          <div className="circle3" />
          <div className="circle4" />
        </div>
      </div>

      <div className="cont">
        
        <MyApplicationModal />

        <div className="row">
          <div className="col-md-12">
            <div className="buttons">
              <a href="#" className="savebtn">
                SAVE
              </a>
              <a href="#" className="nextbtn">
                NEXT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApplication;
