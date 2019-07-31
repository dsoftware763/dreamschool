import React from 'react';
import Calendar from '../../components/calendar/Calendar';
import UpcomingEvents from '../../components/calendar/UpcomingEvents';

const Parent = () => {
    return (
      // <!-- Begin Page Content -->
      <div className="container-fluid calendarcf">
       <Calendar/>
        <UpcomingEvents/>
			
      </div>
  
    );
}

export default Parent;