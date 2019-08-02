import React from 'react';
import whowearebgleft from '../../assets/images/whowearebgleft.png';
import programimg1 from '../../assets/images/programimg1.png';
import programimg3 from '../../assets/images/programimg3.png';
import no1 from '../../assets/images/no1.png';
import no2 from '../../assets/images/no2.png';
import no3 from '../../assets/images/no3.png';
import RevisedIllustration from '../../assets/images/RevisedIllustration.png';

const WhoWeAre = () => {
    return (
        <div className="container-fluid whoweare">
            <img src={whowearebgleft} className="bgleft" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Who we are</h1>
                        <p>We are a community of educators, providers, and technologists, dedicated to helping you find the preschool and daycare solutions of your dreams.</p>
                        <h2>Our program activities:</h2>
                        <div className="programrow">
                            <div className="row odd">
                                <div className="col-md-5 col-md-push-7">
                                    <img src={programimg1} className="imgright" alt=""/>
                                </div>
                                <div className="col-md-7 col-md-pull-5">
                                    <div className="fright">
                                        <div className="inlineb flex align-items-center">
                                            <img src={no1} className="img-responsive" alt=""/>
                                            <h3>Provide enriching environments for young minds</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row evv">
                                <div className="col-md-5">
                                    <img src={RevisedIllustration} className="imgright" alt=""/>
                                </div>
                                <div className="col-md-7">
                                    <div className="fright">
                                        <div className="inlineb flex align-items-center">
                                            <img src={no2} className="img-responsive" alt=""/>
                                            <h3>Meet the unique needs of children</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row odd">
                                <div className="col-md-5 col-md-push-7">
                                    <img src={programimg3} className="imgright" alt=""/>
                                </div>
                                <div className="col-md-7 col-md-pull-5">
                                    <div className="fright">
                                        <div className="inlineb flex align-items-center">
                                            <img src={no3} className="img-responsive" alt=""/>
                                            <h3>Are designed based on research and proven practices</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <h5>Are you an educational provider?</h5>
                        <div className="btns">
                            <p className="btnreg"><a href="#">Register Program</a></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default WhoWeAre;