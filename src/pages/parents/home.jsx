import React from 'react';
import arrowleftbox from '../../assets/images/arrowleftbox.svg';
import ddicon from '../../assets/images/ddicon.svg';
import arrowdownselect from '../../assets/images/arrowdownselect.svg';
import checkimg from '../../assets/images/checkimg.svg';
import child1 from '../../assets/images/child1.png';

const Parent = () => {
    return (
      // <!-- Begin Page Content -->
      <div className="container-fluid hero">

        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="">Welcome, Keisha!</h1>
        </div>
    
     <div className="row">
       <div className="col-md-12">
         <div className="orange section">
           <h4>PROGRAM</h4>
           <a href="">
             <div className="box boxorange">
               <h2>Interested Programs</h2>

               <div className="inlinebox">
                 <h3>9</h3>
               </div>
               <div className="inlinebox">
                 <p>+3</p>
                 <p>This Week</p>
               </div>
               <img src={arrowleftbox} className="arrowright" alt=""/>
             </div>
           </a>
           <a href="">
             <div className="box boxorange">
               <h2>Open Applications</h2>

               <div className="inlinebox">
                 <h3>3</h3>
               </div>
               <div className="inlinebox">
                 <p>+0</p>
                 <p>This Week</p>
               </div>
               <img src={arrowleftbox} className="arrowright" alt=""/>
             </div>
           </a>
           <a href="#">
             <div className="box boxorange">
               <h2>Program Updates</h2>

               <div className="inlinebox">
                 <h3>7</h3>
               </div>
               <div className="inlinebox">
                 <p>+2</p>
                 <p>This Week</p>
               </div>
               <img src={arrowleftbox} className="arrowright" alt=""/>
             </div>
           </a>
         </div>
         <div className="blue section">
           <h4>FINANCE</h4>

           <a href="#">
             <div className="box boxorange bluebox">
               <h2>Pending Payments</h2>

               <div className="inlinebox">
                 <h3>10</h3>
               </div>
               <div className="inlinebox">
                 <p>+2</p>
                 <p>This Week</p>
               </div>
               <img src={arrowleftbox} className="arrowright" alt=""/>
             </div>
           </a>
           <a href="#">
             <div className="box boxorange bluebox">
               <h2>Overdue Payments</h2>

               <div className="inlinebox">
                 <h3>11</h3>
               </div>
               <div className="inlinebox">
                 <p>+2</p>
                 <p>This Week</p>
               </div>
               <img src={arrowleftbox} className="arrowright" alt=""/>
             </div>
           </a>
         </div>
         
       </div>
     </div>

     <div className="row">
         <div className="col-xl-6 col-xl-6-new">
           <div className="tablebox">
             <div className="tableheader">
               <div className="row">
                 <div className="col-md-7">
                   <h2>RECENT PAYMENTS <img src={ddicon} alt=""/></h2>
                 </div>
                 <div className="col-md-5">
                   <div className="select">
                     <select>
                         <option value="0">This Month:</option>
                         <option value="1">1</option>
                         <option value="2">2</option>
                       </select>
                       <img src={arrowdownselect} className="arrowdownselect" alt=""/>

                   </div>
                 </div>
               </div>
             </div>
             <div className="tablebody">
               <a href="">
                 <div className="row">
                   <div className="col-lg-7">
                     <div className="row">
                       <div className="col-lg-4">
                         <h2 className="price">$2,700</h2> 
                       </div>
                       <div className="col-lg-7">
                         <h3>Upcoming Tuition</h3>
                         <p>(Jun 10, 2019 - Jun 14, 2019)</p>
                       </div>
                     </div>
                   </div>
                   <div className="col-lg-5 rightside">
                     <div className="row">
                       <div className="col-lg-6">
                         <p>Due Jun 21, 2019</p>
                       </div>
                       <div className="col-lg-6">
                         <p className="status">Unpaid</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </a>
               <a href="" className="overdue">
                 <div className="row">
                   <div className="col-lg-7">
                     <div className="row">
                       <div className="col-lg-4">
                         <h2 className="price">$2,700</h2> 
                       </div>
                       <div className="col-lg-7">
                         <h3>Past Tuition</h3>
                         <p>(Jun 10, 2019 - Jun 14, 2019)</p>
                       </div>
                     </div>
                   </div>
                   <div className="col-lg-5 rightside">
                     <div className="row">
                       <div className="col-lg-6">
                         <p>Due Jun 21, 2019</p>
                       </div>
                       <div className="col-lg-6">
                         <p className="status">Overdue</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </a>
               <a href="" className="paid">
                 <div className="row">
                   <div className="col-lg-7">
                     <div className="row">
                       <div className="col-lg-4">
                         <h2 className="price">$2,700</h2> 
                       </div>
                       <div className="col-lg-7">
                         <h3>Past Tuition</h3>
                         <p>(Jun 10, 2019 - Jun 14, 2019)</p>
                       </div>
                     </div>
                   </div>
                   <div className="col-md-5 rightside">
                     <div className="row">
                       <div className="col-lg-6">
                         <p>Due Jun 21, 2019</p>
                       </div>
                       <div className="col-lg-6 paidbox">
                         <div className="box">
                           <p className="status">Paid </p>
                           <img src={checkimg} className="check" alt=""/>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </a>
             </div>
           </div>
         </div>
         <div className="col-xl-6 col-xl-6-new">
           <div className="tablebox tablebox2">
             <div className="tableheader">
               <div className="row">
                 <div className="col-md-6">
                   <h2>MY ENROLLMENTS <img src={ddicon} alt=""/></h2>
                 </div>
                 <div className="col-md-6">
                   <ul className="leftlist">
                     <li><a href="#" className="active">Child 1</a></li>
                     <li><a href="#">Child 2</a></li>
                   </ul>
                 </div>
               </div>
             </div>
             <div className="tablebody">
               <div className="row">
                 <div className="col-md-12">
                   <div className="name">
                     <img src={child1} alt=""/>
                     <h2>Maxwell Thompson</h2>
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-12">
                   <div className="boxleft">
                     <p>Program:</p>
                   </div>
                   <div className="boxright">
                     <p>Emily’s Dreamschool</p>
                   </div>
                 </div>
                 <div className="col-md-12">
                   <div className="boxleft">
                     <p>Duration:</p>
                   </div>
                   <div className="boxright">
                     <p>January 1 2019 - December 1 2019 </p>
                   </div>
                 </div>
                 <div className="col-md-12">
                   <div className="boxleft">
                     <p>Times:</p>
                   </div>
                   <div className="boxright">
                     <p>Monday - Friday</p>
                     <p><span>(1pm - 9pm)</span></p>
                   </div>
                 </div>
                 <div className="col-md-12">
                   <div className="boxleft">
                     <p>Tuition:</p>
                   </div>
                   <div className="boxright">
                     <p>$5000 / month</p>
                   </div>
                 </div>
                 <div className="col-md-12">
                   <div className="boxleft">
                     <p>Status:</p>
                   </div>
                   <div className="boxright">
                     <p>Enrolled, Active attendance</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
     </div>
      </div>
  
    );
}

export default Parent;