import React from 'react';
import footerbg from '../../assets/images/footerbg.png';
import footerinstagram from '../../assets/images/footerinstagram.png';
import footerfb from '../../assets/images/footerfb.png';
import twitter_icon from '../../assets/images/twitter_icon.png';

const Footer = () => {
    return (
        <div className="footer container-fluid" style={{display: "flex", lineHeight: "1.42857143"}}>
            <img src={footerbg} className="bgimg" alt=""/>
            <div className="container" style={{paddingRight: 0, paddingLeft: 0, marginBottom: "20px", maxWidth: "initial"}}>
                <div className="row" style={{width: "100%", marginRight: "-15px", marginLeft: "-15px"}}>
                    <div className="col-lg-5"></div>
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mail">
                                    <p>contact@dreamschools.com</p>
                                </div>

                                <div className="location">
                                    <p>Centre for Social Innovation</p>
                                    <p><span>192 Spadina Ave, Toronto</span></p>
                                </div>
                                <div className="follow">
                                    <span style={{marginRight: "10px", fontWeight: "bold", fontSize: "14px"}}>Follow Us</span>
                                    <a href="#"><img src={footerinstagram} alt=""/></a>
                                    <a href="#"><img src={footerfb} alt=""/></a>
                                    <a href="#"><img src={twitter_icon} alt=""/></a>
                                </div>
                            </div>
                            <div className="col-md-4 Dreamschools">
                                <h4>Dreamschools</h4>
                                <div className="maxwidthforlist">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <ul>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Jobs</a></li>
                                                <li><a href="#">FAQ</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-7">
                                            <ul>
                                                <li><a href="#">Terms of Use</a></li>
                                                <li><a href="#">Privacy Policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 locationsdiv">
                                <div>
                                    <h4>Locations</h4>
                                    <div className="locationmaxw">
                                        <div className="row" style={{marginRight: "-15px", marginLeft: "-15px"}}>
                                            <div className="col-xs-6">
                                                <ul>
                                                    <li>Toronto, ON  </li>
                                                    <li>Hamilton, ON  </li>
                                                    <li>Brampton, ON  </li>
                                                    <li>Richmond Hill, ON  </li>
                                                    <li>Pickering, ON    </li>
                                                    <li>Oshawa, ON  </li>
                                                </ul>
                                            </div>
                                            <div className="col-xs-6">
                                                <ul>
                                                <li>Mississauga, ON</li>
                                                <li>Oakville, ON  </li>
                                                <li>Vaughan, ON  </li>
                                                <li>Markham, ON  </li>
                                                <li>Ajax, ON  </li>
                                                <li>Peterborough, ON</li>
                                                </ul>
                                            </div>
                                        </div>
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

export default Footer;