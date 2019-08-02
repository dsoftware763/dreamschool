import React from 'react';
import rightmain from '../../assets/images/rightmain.png';
import thumbs_up from '../../assets/images/thumbs_up.png';
import ribbon from '../../assets/images/ribbon.png';
import peace from '../../assets/images/peace.png';
import hourglass from '../../assets/images/hourglass.png';

const Benefits = () => {
    return (
        <div className="container-fluid providebenefits2 providebenefits3">
            <img src={rightmain} className="bgright" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Trustworthy and qualified education options</h1>
                        <div className="boxes">
                            <div className="box">
                                <div className="placeforimg">
                                    <div className="img">
                                        <img src={thumbs_up} alt="Thumbs up" />
                                    </div>
                                </div>
                                <div className="fortitle">
                                    <h2>CONFIDENCE</h2>
                                </div>
                                <p>Search for quality educational programs available in your area</p>
                            </div>
                            <div className="box">
                                <div className="placeforimg">
                                    <div className="img">
                                        <img src={ribbon} alt="Ribbon" />
                                    </div>
                                </div>
                                <div className="fortitle">
                                    <h2>QUALIFIED EDUCATION</h2>
                                </div>
                                <p>Align your child’s needs with our educator’s teaching philosophies</p>
                            </div>
                            <div className="box">
                                <div className="placeforimg">
                                    <div className="img">
                                        <img style={{maxWidth: "230px", marginBottom: "-9%"}} src={peace} alt="Peace" />
                                    </div>
                                </div>
                                <div className="fortitle">
                                    <h2>PEACE OF MIND</h2>
                                </div>
                                <p>Our providers love working with children and care about making a positive impact</p>
                            </div>
                            <div className="box">
                                <div className="placeforimg">
                                    <div className="img">
                                        <img style={{maxWidth: "230px", marginBottom: "-9%"}} src={hourglass} alt="Hourglass" />
                                    </div>
                                </div>
                                <div className="fortitle">
                                    <h2>SAVE YOUR TIME</h2>
                                </div>
                                <p>Simple enrollment processes and convenient payment options</p>
                            </div>
                        </div>
                        <div className="btns">
                            <p className="btnfind"><a href="#">Find a Dreamschool</a></p>
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;