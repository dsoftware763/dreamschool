import React from "react";
import WeeklySlotsCalendar from "../../components/calendar/WeeklySlotsCalendar";

const WeeklySlots = () => {
  return (
    <div className="admin">
      <div className="container-fluid enrolled_2">
        <div className="row">
          <div className="col-md-12">
            <h1>Enrolled</h1>
          </div>
        </div>

        <WeeklySlotsCalendar />

        </div>
    </div>
  );
};

export default WeeklySlots;
