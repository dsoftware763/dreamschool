import React from 'react';
import about_16 from '../../../assets/images/about-16.png';
import about_17 from '../../../assets/images/about-17.png';
import about_18 from '../../../assets/images/about-18.png';
import about_19 from '../../../assets/images/about-19.png';
import about_20 from '../../../assets/images/about-20.png';
import about_21 from '../../../assets/images/about-21.png';

const Features = () => {
    return (
        <div className="container-fluid parents">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 leftside">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-10">
                            <h1>Parents</h1>
                            <div className="paragraph">
                                <h2>Are you looking for an affordable, high-quality preschool, child care provider, or activity close to
                                your
                                home?</h2>

                                <div className="parent-descript">Dreamschools provides an all-in-one platform that helps you find affordable and
                                reviewed childcare and educational activities close to your home or work.
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-10">
                                <h3>CONVENIENTLY FIND PROGRAMS IN YOUR AREA</h3>
                            </div>
                            <div className="col-lg-2">
                                <img src={about_16} className="icon" alt=""/>
                            </div>
                            <div className="col-lg-10">
                                <p>Search for quality child care and educational programs in your neighbourhood</p>
                                <p>Get upfront pricing and availability</p>
                                <p>Be the first to see new programs opening up in your area</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-10">
                                <h3>SAVE TIME AND MONEY</h3>
                            </div>
                            <div className="col-lg-2">
                                <img src={about_17} className="icon" alt=""/>
                            </div>
                            <div className="col-lg-10">
                                <p>Schedule tours and get to know your childcare expert </p>
                                <p>Apply to many programs without all the repetitive paperwork</p>
                                <p>Convenient and automatic payment options</p>
                            </div>
                        </div>

                        <div className="box">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-10">
                                    <h3>OVERSEE YOUR CHILD'S EDUCATIONAL EXPERIENCE</h3>
                                </div>
                                <div className="col-lg-2">
                                    <img src={about_18} className="icon" alt=""/>
                                </div>
                            <div className="col-lg-10">
                                <p>Align your child’s needs with program teaching methodologies </p>
                                <p>Low child to caregiver ratio so your child gets the attention they deserve</p>
                            </div>
                            </div>
                    </div>
                    <div className="col-lg-6 rightside">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-10">
                            <h1>Early childhood educators</h1>
                            <div className="paragraph">
                                <h2>Do you want to start your own preschool or educational program?</h2>
                                <div className="parent-descript">Dreamschool works with you to start and mange your own child care or
                                educational program. From
                                program design, to marketing, to payments, and everything in between, we are here to help.
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-10">
                                <h3>LAUNCH YOUR PROGRAM</h3>
                            </div>
                            <div className="col-lg-2">
                                <img src={about_19} className="icon" alt=""/>
                            </div>
                            <div className="col-lg-10">
                                <p>Step-by-step guidelines to set up your business</p>
                                <p>1-on-1 mentorship with a childcare expert</p>
                                <p>Beautifully curated website showcasing your program</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-10">
                                <h3>FILL YOUR classNameROOM</h3>
                            </div>
                            <div className="col-lg-2">
                                <img src={about_20} className="icon" alt=""/>
                            </div>
                            <div className="col-lg-10">
                                <p>Data-driven methods to maximize classNameroom occupancy</p>
                                <p>Pricing model to maximize your earnings</p>
                                <p>Use evidence-based program design to deliver enriching learning experiences</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-10">
                                <h3>SIMPLIFY YOUR DAY</h3>
                            </div>
                            <div className="col-lg-2">
                                <img src={about_21} className="icon" alt=""/>
                            </div>
                            <div className="col-lg-10">
                                <p>Manage enrollments with ease</p>
                                <p>Worry-free invoicing and payment collection</p>
                                <p>Easy-to-use tools to manage your day-to-day activities</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-lg-6 leftside no-border">
                <h4>Secure a spot for your child</h4>
                <div className="btns">
                    <p className="btnfind"><a href="#">Find a Dreamschool</a></p>
                </div>
            </div>
            <div className="col-lg-6 rightside">
                <h4>Partner with us</h4>
                <div className="btns">
                <p className="btnreg"><a href="#">Register Program</a></p>
                </div>
            </div>
        </div>
    );
}
export default Features;