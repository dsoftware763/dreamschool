import React from "react"
import aline from "../../assets/images/aline.svg"
import milestonecheck from "../../assets/images/milestonecheck.svg"
import milestonecheck2 from "../../assets/images/milestonecheck2.svg"
import milestonecheck3 from "../../assets/images/milestonecheck3.svg"

const RightSideBox = () => {
    return (
        <div className="cont">
            <div className="bigbox">
                <img src={aline} className="line" alt="" />
                <p className="active"><img src={milestonecheck2} alt="" />DS Initial Meeting</p>
                <p className="active"><img src={milestonecheck2} alt="" />Educator Application</p>
                <p className=""><img src={milestonecheck} alt="" />Criminal Background Check</p>
                <p className=""><img src={milestonecheck} alt="" />CPR / First Aid</p>
                <p className=""><img src={milestonecheck} alt="" />Health Assessment</p>
                <p className=""><img src={milestonecheck} alt="" />Program Setup</p>
                <p className="active"><img src={milestonecheck2} alt="" />Allocate Play Space</p>
                <p className=""><img src={milestonecheck3} alt="" />Payment Settings</p>
                <p className=""><img src={milestonecheck3} alt="" />Home Safety Measures & Play Materials</p>
                <p className="active"><img src={milestonecheck2} alt="" />Gather marketing photos</p>
            </div>
        </div>
    )
}

export default RightSideBox