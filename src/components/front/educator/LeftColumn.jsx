import React from 'react';
import am2 from '../../../assets/images/am2.png';
import am3 from '../../../assets/images/am3.png';
import am4 from '../../../assets/images/am4.png';
import am5 from '../../../assets/images/am5.png';

const LeftColumn = () => {
    return (
        <div className="col-lg-2 col-lg-pull-8" id="leftside">
            <div className="col-lg-12">
                <div className="leftside">
                    <div className="amenities">
                        <h2>AMENITIES</h2>
                        <ul>
                            <li><img src={am2} alt=""/>Breakfast, Lunch, Dinner</li>
                            <li><img src={am3} alt=""/>2 days per week</li>
                            <li><img src={am4} alt=""/>4
                            snacks per day
                            </li>
                            <li><img src={am5} alt=""/>Potty training required</li>
                        </ul>
                    </div>
  
                    <div className="DAILYSCHEDULE">
                        <h2>DAILY SCHEDULE</h2>
                        <ul>
                            <li>
                                <p>2:00 PM</p>
                                <p><span>Children Arrive</span></p>
                            </li>
                            <li>
                                <p>3:00 PM</p>
                                <p><span>Arts and Crafts</span></p>
                            </li>
                            <li>
                                <p>4:00 PM</p>
                                <p><span>Naps</span></p>
                            </li>
                            <li>
                                <p>5:00 PM</p>
                                <p><span>Reading and storytelling</span></p>
                            </li>
                            <li>
                                <p>6:00 PM</p>
                                <p><span>Lunch</span></p>
                            </li>
                            <li>
                                <p>7:00 PM</p>
                                <p><span>Afternoon Work (independent play)</span></p>
                            </li>
                            <li>
                                <p>8:00 PM</p>
                                <p><span>Circle time</span></p>
                            </li>
                            <li>
                                <p>9:00 PM</p>
                                <p><span>Nap / quiet time</span></p>
                            </li>
                            <li>
                                <p>10:00 PM</p>
                                <p><span>Clean up and prepare to leave</span></p>
                            </li>
                            <div className="silverline">
            
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LeftColumn;