import React from 'react';
import testomonialimg1 from '../../assets/images/testomonialimg1.png';
import testomonialimg2 from '../../assets/images/testomonialimg2.png';

const Testimonials = () => {
    return (
        <div className="container-fluid testomonials">
            <div className="container">
                <div className="maxwidth">
                    <div className="row">
                        <div className="col-lg-12"><h1>See why people love Dreamschools</h1></div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="imgbox">
                                        <img src={testomonialimg1} alt=""/>
                                    </div>
                                    <div className="descp">
                                        <h2>CARRIE H.</h2>
                                        <h3>Mother</h3>
                                        <div className="crta"></div>
                                    </div>
                                </div>
                            </div>
                            <p> <span>"</span>Our little one gets excited whenever we drop him off, and he is still so happy at the end of the day. His communication and comprehension has really taken off since we enrolled. <span>"</span></p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                <div className="imgbox">
                                    <img src={testomonialimg2} alt=""/>
                                </div>
                                <div className="descp">
                                    <h2>PAULA K.</h2>
                                    <h3>Director of Little Trees</h3>
                                    <div className="crta"></div>
                                </div>
                            </div>
                        </div>
                        <p> <span>"</span>Dreamschools has helped me fulfill my dream of owning my own preschool. They partnered with me so that I can focus on doing what I love. <span>"</span></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Testimonials;