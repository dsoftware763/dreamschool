import React from 'react';
import ppicon from '../../assets/images/ppicon.svg';
import ppicon2 from '../../assets/images/ppicon2.svg';

const UpcomingEvents = () => {
    return(
        <div className="upcomingeventslist">
            <h1>Upcoming Events</h1>

            <div className="boxofevent">
                <div className="row">
                    <div className="col-4">
                        <h2>JULY 1 - 5</h2>
                    </div>
                    <div className="col-8">
                        <h3>Sarah Johnson is on vacation</h3>
                        <div className="desc">
                            <p><img src={ppicon} alt=""/>Sarah Johnson</p>
                            <p><img src={ppicon2} alt=""/>Attendance</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="boxofevent">
                <div className="row">
                    <div className="col-4">
                        <h2>JULY 13</h2>
                        <p className="hours2">10:00 AM</p>
                    </div>
                    <div className="col-8">
                        <h3>Keira changes her medicati…</h3>
                        <div className="desc">
                            <p><img src={ppicon} alt=""/>Keira Michelle</p>
                            <p><img src={ppicon2} alt=""/>Attendance</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="boxofevent">
                <div className="row">
                    <div className="col-4">
                        <h2>JULY 16</h2>
                        <p className="hours2">02:00 PM</p>

                    </div>
                    <div className="col-8">
                        <h3>Leanna has an appointment</h3>
                        <div className="desc">
                            <p><img src={ppicon} alt=""/>Leanna Gigelle</p>
                            <p><img src={ppicon2} alt=""/>Attendance</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="boxofevent">
                <div className="row">
                    <div className="col-4">
                        <h2>JULY 19-21</h2>
                    </div>
                    <div className="col-8">
                        <h3>Chuck will be absent</h3>
                        <div className="desc">
                            <p><img src={ppicon} alt=""/>Sarah Johnson</p>
                            <p><img src={ppicon2} alt=""/>Attendance</p>
                        </div>
                    </div>
                </div>
            </div>
		</div>
    );
}

export default UpcomingEvents;