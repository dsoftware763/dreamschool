import React from 'react';
import Calendar from '../../components/calendar/Calendar';
import UpcomingEvents from '../../components/calendar/UpcomingEvents';

const CalendarBox = () => {
    return (
      // <!-- Begin Page Content -->
      <div className="container-fluid calendarcf">
       <Calendar/>
        <UpcomingEvents/>
			
      </div>
  
    );
}

export default CalendarBox;