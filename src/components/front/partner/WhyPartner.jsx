import React from 'react';
import computer_gears from '../../../assets/images/computer_gears.png';
import launch from '../../../assets/images/launch.png';
import optimize from '../../../assets/images/optimize.png';
import join from '../../../assets/images/join.png';

const WhyPartner = () => {
    return (
        <div className="container-fluid providebenefits2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Why partner with Dreamschools?</h1>
                        <div className="boxes">
                            <div className="box">
                                <div className="placeforimg">
                                    <div className="img">
                                        <img src={computer_gears} alt="Computer gears" />
                                    </div>
                                </div>
                                <div className="fortitle">
                                    <h2>FOCUS ON THE KIDS, WE HANDLE THE ADMIN WORK</h2>
                                </div>
                                <p>Use our suite of tools to<br/>simplify day-to-day activities</p>
                            </div>
                            <div className="box">
                                <div className="placeforimg">
                                    <div className="img">
                                        <img src={launch} alt="Launch" />
                                    </div>
                                </div>
                                <div className="fortitle">
                                    <h2>LAUNCH BUSINESS<br/>WITH EASE</h2>
                                </div>
                                <p>Receive 1-on-1 mentorship from us in running your own business</p>
                            </div>
                            <div className="box">
                                <div className="placeforimg">
                                    <div className="img">
                                        <img src={optimize} alt="Optimize" />
                                    </div>
                                </div>
                                <div className="fortitle">
                                    <h2>OPTIMIZE INCOME</h2>
                                </div>
                                <p>Use our effective platform<br/>to fill your Dreamschool</p>
                            </div>
                            <div className="box">
                            <div className="placeforimg">
                                <div className="img">
                                    <img src={join} alt="Join" />
                                </div>
                            </div>
                            <div className="fortitle">
                                <h2>JOIN OUR NETWORK</h2>
                            </div>
                            <p>Join a community of parents and early childhood care providers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default WhyPartner;