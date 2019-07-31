import React from 'react';
import imgofbank from '../../assets/images/imgofbank.png';

class  AccountSettings extends React.PureComponent {
	state = {
		displayName: 'Keisha Thompson',
		username: 'keishat89',
		password: '',
		tourRequest: true,
		failedPayment: true,
		upcomingEvents: false,
		waitList: true
	}
	render () {
		const {displayName, username, password, tourRequest, newApplication, failedPayment, upcomingEvents, waitList} = this.state;
		return (
			// <!-- Begin Page Content -->
			<div className="container-fluid accountsettings">
			   <h1>Account Settings</h1>
			   <div class="cont">
				  <div class="row">
				  <form onSubmit={this.handleSubmit}>
					<div class="box">
					  <div class="bgofbox">
						<div class="header">
						  <div class="row">
							<div class="col-md-12">
							  <h2>PROFILE</h2>
							</div>
						  </div>
						</div>
						<div class="formbody">
						 
	  
							<div class="row">
							  <div class="col-md-6 col-5">
								<h3>Display Name</h3>
							  </div>
							  <div class="col-md-6 col-7">
								  <input name="displayName" type="text" value={displayName}/>
							  </div>
							</div>
							<div class="row">
							  <div class="col-md-6 col-5">
								<h3>Username</h3>
							  </div>
							  <div class="col-md-6 col-7">
								  <input name="username" type="text" value={username}/>
							  </div>
							</div>
							<div class="row">
							  <div class="col-md-6 col-5">
								<h3>Password</h3>
							  </div>
							  <div class="col-md-6 col-7">
								  <input name="password" type="text" value={password}/>
							  </div>
							</div>
							
						
						</div>
					  </div>
					</div>
	  
					<div class="box">
					  <div class="bgofbox">
						<div class="header">
						  <div class="row">
							<div class="col-md-12">
							  <h2>NOTIFICATIONS</h2>
							</div>
						  </div>
						</div>
						<div class="formbody">
							<div class="row">
							  <div class="col-md-6 col-7">
								<h3>New Tour Requests</h3>
							  </div>
							  <div class="col-md-6 col-5">
								<div class="swipupbtn">
									<span class="status">On</span>
									<input name="tourRequest" type='checkbox' class='ios8-switch ios8-switch-sm' id='checkbox-2' checked={tourRequest}/>
									<label for='checkbox-2'></label>
								</div>
							  </div>
							</div>
							
							<div class="row">
							  <div class="col-md-6 col-7">
								<h3>New Application</h3>
							  </div>
							  <div class="col-md-6 col-5">
								<div class="swipupbtn">
									<span class="status">On</span>
									<input name="newApplication" type='checkbox' class='ios8-switch ios8-switch-sm' id='checkbox-3' checked={newApplication}/>
									<label for='checkbox-3'></label>
								</div>
							  </div>
							</div>
							
							<div class="row">
							  <div class="col-md-6 col-7">
								<h3>Failed Payment</h3>
							  </div>
							  <div class="col-md-6 col-5">
								<div class="swipupbtn">
									<span class="status">On</span>
									<input name="failedPayment" type='checkbox' class='ios8-switch ios8-switch-sm' id='checkbox-4' checked={failedPayment}/>
									<label for='checkbox-4'></label>
								</div>
							  </div>
							</div>
							
							<div class="row">
							  <div class="col-md-6 col-7">
								<h3>Upcoming Events</h3>
							  </div>
							  <div class="col-md-6 col-5">
								<div class="swipupbtn">
									<span class="status">Off</span>
									<input name="upcomingEvents" type='checkbox' class='ios8-switch ios8-switch-sm' id='checkbox-5' checked={upcomingEvents}/>
									<label for='checkbox-5'></label>
								</div>
							  </div>
							</div>
							
							<div class="row">
								<div class="col-md-6 col-7">
									<h3>Waitlist Reconsideration</h3>
								</div>
							  	<div class="col-md-6 col-5">
								  <div class="swipupbtn">
									<span class="status">On</span>
									<input name="waitList" type='checkbox' class='ios8-switch ios8-switch-sm' id='checkbox-6' checked={waitList}/>
									<label for='checkbox-6'></label>
								  </div>
							  	</div>
							</div>
						</div>
					  </div>
					</div>
	  
	  
					<div class="box2">
					  <div class="bgofbox">
						<div class="header">
						  <div class="row">
							<div class="col-md-12">
							  <h2>PROFILE PHOTOS</h2>
							</div>
						  </div>
						</div>
						<div class="formbody">
						  <div class="boxofprfilephotos">
							<div class="row">
							  <div class="col-md-4 col-6">
								<p>Me</p>
								<img src="img/meimg.png" alt=""/>
								<a href="">Upload</a>
							  </div>
							  <div class="col-md-4 col-6">
								<p>Jasmine</p>
								<img src="img/jasmine.png" alt=""/>
								<a href="">Upload</a>
							  </div>
							  <div class="col-md-4 col-6">
								<p>Johnny</p>
								<img src="img/johnny.png" alt=""/>
								<a href="">Upload</a>
							  </div>
							</div>
						  </div>
						</div>
					  </div>
					</div>
				</form>
				  </div>
	  
	  
				  <div class="row">
					<div class="col-md-12">
					  <div class="buttons">
						<a href="#" class="savebtn">UPDATE PLAN</a>
						<a href="#" class="nextbtn">CANCEL APPLICATION</a>
					  </div>
					</div>
				  </div>
				 
				</div>		
			</div>
		
		  );
	}
   
}

export default AccountSettings;