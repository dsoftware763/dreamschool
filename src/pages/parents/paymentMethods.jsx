import React from 'react';
import imgofbank from '../../assets/images/imgofbank.png';

const PaymentMethods = () => {
    return (
      // <!-- Begin Page Content -->
      <div className="container-fluid paymentmethod">
        <h1>Payment Settings</h1>
				<div className="cont">
				<div className="paymentbox">
					<div className="row">
						<div className="col-xl-4 col-lg-6 col-md-12">
							<div className="leftsidebox">
								<h2><span>1</span> CHOOSE PAYMENT METHOD</h2>
	
								<a href="#">
									<div className="leftcircle active">
										<div className="activecircle">
											
										</div>
									</div>
									Connect to your bank
								</a>
								<a href="#">
									<div className="leftcircle ">
										<div className="activecircle">
											
										</div>
									</div>
									Manual ACH Entry
								</a>
								<a href="#">
									<div className="leftcircle ">
										<div className="activecircle">
											
										</div>
									</div>
									Credit Card
									<p>(Additional 2% charge may apply)</p>
								</a>
							</div>
						</div>
						<div className="col-xl-8 col-lg-6 col-md-12">
							<div className="rightside">
								<div className="contofinfo">
									<h2><span>2</span> CHOOSE YOUR BANK</h2>
									<img src={imgofbank} alt=""/>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="buttons">
						  <a href="#" className="savebtn">SAVE</a>
						</div>
					</div>
				</div>
			</div>
      </div>
  
    );
}

export default PaymentMethods;