import React from "react";
import searchicon2 from "../../assets/images/searchicon2.svg";
import arrowdownselect2 from "../../assets/images/arrowdownselect2.svg";
import msgicon from "../../assets/images/msgicon.png";
import msgicon2 from "../../assets/images/msgicon2.png";
import msgicon3 from "../../assets/images/msgicon3.png";

const LeftMessagingPanel = () => {
  return (
    <div class="leftside">
      <div class="upermenu">
        <div class="row">
          <div class="col-6">
            <div class="leftm">
              <a href="" class="active">
                Conversations
              </a>
            </div>
          </div>
          <div class="col-6">
            <div class="rightm">
              <a href="">
                <span>3</span>New Connections
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="search search2">
        <div class="row">
          <div class="col-6">
            <div class="search">
              <div class="input">
                <input type="text" placeholder="Search conversations" />

                <button>
                  {" "}
                  <img src={searchicon2} class="searchicon" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="select">
              <div class="select">
                <select>
                  <option value="0">All</option>
                  <option value="1">Enrolled</option>
                  <option value="1">Leads</option>
                  <option value="2">Invitees</option>
                </select>
                <img src={arrowdownselect2} class="arrowdownselect" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="msgs">
        <a href="">
          <div class="row">
            <div class="col-3">
              <div class="divforimg">
                <img src={msgicon} alt="" />
                <div class="mincircle" />
              </div>
            </div>
            <div class="col-6">
              <h2>Dave Jefferson</h2>
              <p class="bolder">Hey, would you like</p>
            </div>
            <div class="col-3">
              <h3>Just Now</h3>
            </div>
          </div>
        </a>
        <a href="" class="active">
          <div class="row">
            <div class="col-3">
              <div class="divforimg ">
                <img src={msgicon2} alt="" />
                <div class="mincircle" />
              </div>
            </div>
            <div class="col-6">
              <h2>Dave Jefferson</h2>
              <p>Hello!</p>
            </div>
            <div class="col-3">
              <h3>10:42 AM</h3>
            </div>
          </div>
        </a>
        <a href="">
          <div class="row">
            <div class="col-3">
              <div class="divforimg activecircle">
                <img src={msgicon3} alt="" />
                <div class="mincircle" />
              </div>
            </div>
            <div class="col-6">
              <h2>Dave Jefferson</h2>
              <p>Lead</p>
            </div>
            <div class="col-3">
              <h3 class="opacitytime">10:42 AM</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LeftMessagingPanel;
