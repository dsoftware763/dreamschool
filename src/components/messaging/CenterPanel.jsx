import React from "react";
import msgicon2 from "../../assets/images/msgicon2.png";
import msgicon3 from "../../assets/images/msgicon3.png";
import leftmsgarrow from "../../assets/images/leftmsgarrow.png";
import rightmsgarrow from "../../assets/images/rightmsgarrow.png";
import sendmsgbtn from "../../assets/images/sendmsgbtn.svg";

const CenterMessagingPanel = () => {
  return (
    <div class="centerm">
      <div class="paddingmsg">
        <div class="leftsidemsg">
          <div class="row">
            <div class="col-2">
              <div class="divforimg activecircle">
                <img src={msgicon2} alt="" />
                <div class="mincircle" />
              </div>
            </div>
            <div class="col-10">
              <div class="msg">
                <p>
                  <img src={leftmsgarrow} class="leftmsgarrow" alt="" />
                  Hey Emily, I was hoping you could stop the bullying that’s
                  happening to my kid at your daycare.{" "}
                </p>

                <p class="time">10:03 AM</p>
              </div>
            </div>
          </div>
        </div>

        <div class="floatright">
          <div class="rightsidemsg">
            <div class="row">
              <div class="col-10">
                <div class="msg">
                  <p>
                    <img src={rightmsgarrow} class="rightmsgarrow" alt="" />
                    Sorry, can’t do anything about that. Your kid is a loser.
                  </p>

                  <p class="time">10:03 AM</p>
                </div>
              </div>

              <div class="col-2">
                <div class="divforimg">
                  <img src={msgicon3} alt="" />
                  <div class="mincircle" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="leftsidemsg">
          <div class="row">
            <div class="col-2">
              <div class="divforimg activecircle">
                <img src={msgicon2} alt="" />
                <div class="mincircle" />
              </div>
            </div>
            <div class="col-10">
              <div class="msg">
                <p>
                  <img src={leftmsgarrow} class="leftmsgarrow" alt="" />
                  Excuse me? What did you just say?{" "}
                </p>

                <p class="time">10:03 AM</p>
              </div>
            </div>
          </div>
        </div>

        <h4 class="timedate">TODAY</h4>

        <div class="floatright">
          <div class="rightsidemsg">
            <div class="row">
              <div class="col-10">
                <div class="msg">
                  <p>You heard me. </p>

                  <p>
                    <img src={rightmsgarrow} class="rightmsgarrow" alt="" />
                    Suzie is kind of annoying, no offense.
                  </p>

                  <p class="time">10:03 AM</p>
                </div>
              </div>

              <div class="col-2">
                <div class="divforimg">
                  <img src={msgicon3} alt="" />
                  <div class="mincircle" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="leftsidemsg">
          <div class="row">
            <div class="col-2">
              <div class="divforimg activecircle">
                <img src={msgicon2} alt="" />
                <div class="mincircle" />
              </div>
            </div>
            <div class="col-10">
              <div class="msg">
                <p>That is very rude. I want to speak to your manager.</p>
                <p>
                  <img src={leftmsgarrow} class="leftmsgarrow" alt="" />
                  And how dare you? I’m going to get you fired.
                </p>

                <p class="time">10:03 AM</p>
              </div>
            </div>
          </div>
        </div>

        <div class="floatright">
          <div class="rightsidemsg">
            <div class="row">
              <div class="col-10">
                <div class="msg">
                  <p>
                    <img src={rightmsgarrow} class="rightmsgarrow" alt="" />I am
                    my own manager, Susan.
                  </p>

                  <p class="time">10:03 AM</p>
                </div>
              </div>

              <div class="col-2">
                <div class="divforimg">
                  <img src={msgicon3} alt="" />
                  <div class="mincircle" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="leftsidemsg">
          <div class="row">
            <div class="col-2">
              <div class="divforimg activecircle">
                <img src={msgicon2} alt="" />
                <div class="mincircle" />
              </div>
            </div>
            <div class="col-10">
              <div class="msg">
                <p>
                  <img src={leftmsgarrow} class="leftmsgarrow" alt="" />
                  Well, you know what? Suzie is not going to attend your school
                  anymore.
                </p>

                <p class="time">10:03 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sendmsg">
        <div class="row">
          <div class="col-12">
            <div class="search">
              <div class="input">
                <input type="text" placeholder="Search conversations" />

                <button>
                  {" "}
                  <img src={sendmsgbtn} class="searchicon" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterMessagingPanel;
