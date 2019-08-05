import React from "react";
import AttendanceCalendar from "../../components/calendar/AttendanceCalendar";

const Attendance = () => {
  return (
    <div className="admin">
      <div className="container-fluid Attendance">
        <div className="row">
          <div className="col-md-12">
            <h1>Attendance</h1>
          </div>
        </div>
            <AttendanceCalendar />
        </div>
    </div>
  );
};

export default Attendance;
