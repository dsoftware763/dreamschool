import React from 'react';
import imgrightside from '../../../assets/images/imgrightside.png';
import imgab2 from '../../../assets/images/imgab2.png';
import abicon1 from '../../../assets/images/abicon1.png';
import abicon2 from '../../../assets/images/abicon2.png';
import abicon3 from '../../../assets/images/abicon3.png';
import abicon4 from '../../../assets/images/abicon4.png';

const Intro = () => {
    return (
        <div className="container-fluid seccontabu">
            <img src={imgrightside} className="imgrightside" alt=""/>
            <div className="container" style={{marginTop: "70px"}}>
                <div className="maxwidthbox">
                    <div className="row">
                        <div className="col-md-6" style={{padding: 0}}>
                            <img src={imgab2} className="img-responsive" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <div className="aboutusparagrapshafterhero">
                                Dreamschools provides parents with affordable, high-quality preschools and
                                educational activities, while offering early childhood educators with the
                                support they need to provide care and education in their homes & communities.
                            </div>
                            <div>
                                <div className="rowbox">
                                    <img src={abicon1} alt=""/>
                                    <h1>Connecting parents </h1>
                                    <p>with quality child care providers and educators in their area</p>
                                </div>
                                <div className="rowbox">
                                    <img src={abicon2} alt=""/>
                                    <h1>Beautifully curated website </h1>
                                    <p>showcasing each educational program</p>
                                </div>
                                <div className="rowbox">
                                    <img src={abicon3} alt=""/>
                                    <h1>Access to a suite of tools </h1>
                                    <p>to simplify the enrollment process</p>
                                </div>
                                <div className="rowbox">
                                    <img src={abicon4} alt=""/>
                                    <h1>Support and training </h1>
                                    <p>to launch and manage your business</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;