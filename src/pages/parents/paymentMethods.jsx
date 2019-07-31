import React from 'react';
import imgofbank from '../../assets/images/imgofbank.png';

const PaymentMethods = () => {
    return (
      // <!-- Begin Page Content -->
      <div className="container-fluid paymentmethod">
        <h1>Payment Settings</h1>
				<div class="cont">
				<div class="paymentbox">
					<div class="row">
						<div class="col-xl-4 col-lg-6 col-md-12">
							<div class="leftsidebox">
								<h2><span>1</span> CHOOSE PAYMENT METHOD</h2>
	
								<a href="#">
									<div class="leftcircle active">
										<div class="activecircle">
											
										</div>
									</div>
									Connect to your bank
								</a>
								<a href="#">
									<div class="leftcircle ">
										<div class="activecircle">
											
										</div>
									</div>
									Manual ACH Entry
								</a>
								<a href="#">
									<div class="leftcircle ">
										<div class="activecircle">
											
										</div>
									</div>
									Credit Card
									<p>(Additional 2% charge may apply)</p>
								</a>
							</div>
						</div>
						<div class="col-xl-8 col-lg-6 col-md-12">
							<div class="rightside">
								<div class="contofinfo">
									<h2><span>2</span> CHOOSE YOUR BANK</h2>
									<img src={imgofbank} alt=""/>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="buttons">
						  <a href="#" class="savebtn">SAVE</a>
						</div>
					</div>
				</div>
			</div>
      </div>
  
    );
}

export default PaymentMethods;