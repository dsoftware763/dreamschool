import React from "react";
import rightsideimg from "../../assets/images/rightsideimg.png";

const RightMessagingPanel = () => {
  return (
    <div class="rightside">
      <div class="imgrightside">
        <img src={rightsideimg} alt="" />
        <h2>Kate Jefferson</h2>
        <p>Parent</p>
      </div>
      <div class="desc">
        <p>
          Last Status: <span>Applicant (New)</span>
        </p>
        <p>
          Telephone: <span>905 627 8173</span>
        </p>
        <p>
          Email: <span>jasminethomp@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default RightMessagingPanel;
