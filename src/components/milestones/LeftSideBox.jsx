import React from "react";
import aicon from "../../assets/images/aicon.svg";
import bicon from "../../assets/images/bicon.svg";
import cicon from "../../assets/images/cicon.svg";
import lock from "../../assets/images/lock.svg";
import milestonecheck from "../../assets/images/milestonecheck.svg";
import milestonecheck2 from "../../assets/images/milestonecheck2.svg";
import icong from "../../assets/images/icong.svg";

const milestones = {
  A: {
    image: aicon,
    locked: false,
    completed: 35
  },
  B: {
    image: bicon,
    locked: false,
    completed: 65
  },
  C: {
    image: cicon,
    locked: true,
    completed: 0
  }
};

const LeftSideBox = () => {
  const NosOfMilestones = []

  for(var key in milestones){
    NosOfMilestones.push(
        <div className="firstline">
            <div className="row">
                <div className="col-4">
                <img src={milestones[key].image} alt="" />
                </div>
                <div className="col-8">
                    {
                        milestones[key].locked 
                            ?   <img src={lock} className="lock" alt="" />
                            :   <>
                                    <div className="ssline">
                                        <div className="completed" style={{width: milestones[key].completed+'%'}}/>
                                    </div>
                                    <p>{milestones[key].completed}</p>
                                </>  
                    }
                </div>
            </div>
        </div>
    )
  }
  return (
    <div className="leftsidebox">
      <h1>Milestones</h1>
      <p>
        This is where you can track all your milestones! Complete all three
        badges to create a successful Dreamschool.
      </p>
      <div className="box1">
        {NosOfMilestones}       
      </div>
      <div className="box2">
        <h3>LEGEND</h3>
        <p>
          <img src={milestonecheck} className="check" alt="" />
          <span>In Progress</span> <img src={icong} className="aboutit" alt="" />
        </p>
        <p>
          <img src={milestonecheck2} className="check" alt="" />
          <span>Complete</span> <img src={icong} className="aboutit" alt="" />
        </p>
      </div>
    </div>
  );
};

export default LeftSideBox;
