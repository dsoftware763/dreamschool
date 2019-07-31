import React from 'react';
import meimg from '../../assets/images/meimg.png';
import jasmine from '../../assets/images/jasmine.png';
import johnny from '../../assets/images/johnny.png';

class  AccountSettings extends React.PureComponent {
	state = {
		displayName: 'Keisha Thompson',
		username: 'keishat89',
		password: '',
		tourRequest: true,
		newApplication: true,
		failedPayment: true,
		upcomingEvents: false,
		waitList: true
	}

	handChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		alert('form submitted')
	}

	render () {
		const {displayName, username, password, tourRequest, newApplication, failedPayment, upcomingEvents, waitList} = this.state;
		return (
			// <!-- Begin Page Content -->
			<div className="container-fluid accountsettings">
			   <h1>Account Settings</h1>
			   <div class="cont">
				  <div class="row">
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
						 
							<form onSubmit={this.handleSubmit}>	
								<div class="row">
								<div class="col-md-6 col-5">
									<h3>Display Name</h3>
								</div>
								<div class="col-md-6 col-7">
									<input name="displayName" type="text" value={displayName} onChange={this.handChange}/>
								</div>
								</div>
								<div class="row">
								<div class="col-md-6 col-5">
									<h3>Username</h3>
								</div>
								<div class="col-md-6 col-7">
									<input name="username" type="text" value={username} onChange={this.handChange}/>
								</div>
								</div>
								<div class="row">
							  <div class="col-md-6 col-5">
								<h3>Password</h3>
							  </div>
							  <div class="col-md-6 col-7">
								  <input name="password" type="text" value={password} onChange={this.handChange}/>
							  </div>
							</div>
							</form>
						
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
						<form onSubmit={this.handleSubmit}>	
							<div class="row">
							  <div class="col-md-6 col-7">
								<h3>New Tour Requests</h3>
							  </div>
							  <div class="col-md-6 col-5">
								<div class="swipupbtn">
									<span class="status">On</span>
									<input name="tourRequest" type='checkbox' class='ios8-switch ios8-switch-sm' id='checkbox-2' checked={tourRequest} onChange={this.handChange}/>
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
									<input name="newApplication" type='checkbox' class='ios8-switch ios8-switch-sm' id='checkbox-3' checked={newApplication} onChange={this.handChange}/>
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
									<input name="failedPayment" type='checkbox' class='ios8-switch ios8-switch-sm' id='checkbox-4' checked={failedPayment} onChange={this.handChange}/>
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
									<input name="upcomingEvents" type='checkbox' class='ios8-switch ios8-switch-sm' id='checkbox-5' checked={upcomingEvents} onChange={this.handChange}/>
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
									<input name="waitList" type='checkbox' class='ios8-switch ios8-switch-sm' id='checkbox-6' checked={waitList} />
									<label for='checkbox-6'></label>
								  </div>
							  	</div>
							</div>
						</form>
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
								<img src={meimg} alt=""/>
								<a href="#">Upload</a>
							  </div>
							  <div class="col-md-4 col-6">
								<p>Jasmine</p>
								<img src={jasmine} alt=""/>
								<a href="#">Upload</a>
							  </div>
							  <div class="col-md-4 col-6">
								<p>Johnny</p>
								<img src={johnny} alt=""/>
								<a href="#">Upload</a>
							  </div>
							</div>
						  </div>
						</div>
					  </div>
					</div>
			
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