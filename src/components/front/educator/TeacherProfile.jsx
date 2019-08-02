import React from 'react';
import Lisa from '../../../assets/images/Lisa.jpg';
import ticon1 from '../../../assets/images/ticon1.png';
import ticon2 from '../../../assets/images/ticon2.png';
import ticon3 from '../../../assets/images/ticon3.png';
import ticon4 from '../../../assets/images/ticon4.png';

const TeacherProfile = () => {
    return (
        <div className="container-fluid teacherprofil" style={{display: "block"}}>
            <div className="profile-container">
                <div className="col-lg-3">
                    <div className="col-lg-9">
                        <div className="profil">
                            <img src={Lisa} alt="" className="profile-image"/>
                            <h2>Lara Stagljar</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h1>Lara&#39;s Wee Love Daycare</h1>
                    <div className="data">
                        <div className="box">
                            <img src={ticon1} alt=""/>
                            <h3>AGE:</h3>
                            <p>6 months-5 years</p>
                        </div>
                        <div className="box">
                            <img src={ticon2} alt=""/>
                            <h3>TUITION:</h3>
                            <p>From $42/day</p>
                        </div>
                        <div className="box">
                            <img src={ticon3} alt=""/>
                            <h3>OPEN:</h3>
                            <p>Mon-Fri </p>
                            <p>1:00 PM-12:30 AM</p>
                        </div>
                        <div className="box" style={{maxWidth: "180px"}}>
                            <img src={ticon4} alt=""/>
                            <h3>STAFF TO CHILD RATIO:</h3>
                            <p>1:5</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 forbtn">
                    <a className="btn" id="ratings" href="#">View Ratings</a>
                    <div id="ratingsmessage" style={{display: "none"}}>Ratings will be revealed after visiting the educator’s program</div>
                </div>
            </div>
        </div>
    );
}

export default TeacherProfile;