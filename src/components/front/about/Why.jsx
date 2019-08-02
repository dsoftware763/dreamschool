import React from 'react';
import whybgtopside from '../../../assets/images/whybgtopside.png';
import whybtmside from '../../../assets/images/whybtmside.png';

const Why = () => {
    return (
        <div className="container-fluid abwhy">
            <img src={whybgtopside} className="whybgtopside" alt=""/>
            <div className="container flex-column">
            <div className="row">
                <div className="col-md-12">
                    <h1>Why we started Dreamschools</h1>
                </div>
            </div>
            <div className="maxwidthbox">
                <div className="row">
                    <div className="col-md-6">
                        <p>Our team is a group of technologists, community
                            organizers, care providers, and educators. </p>

                        <p>We created Dreamschools to help substantially expand access to high-quality preschools for all
                            families.</p>
                    </div>
                    <div className="col-md-6 rightside">
                        <p>Too many families in Ontario are anxious and nervous about finding affordable, high-quality preschools
                            close to home</p>

                        <p>Too many parents are having to choose between pursuing their careers and finding child care and educational
                            programs</p>

                        <p>The wait lists for preschools are long, and the cost for child care and activities can be exorbitant</p>
                    </div>
                </div>
                <div className="row btns">
                    <div className="col-md-12">
                    <p className="btnfind"><a href="#">Find a Dreamschool</a></p>
                    <p className="btnreg"><a href="#">Register Preschool</a></p>
                    </div>
                </div>
            </div>
        </div>
        <img src={whybtmside} className="whybtmside" alt=""/>
    </div>
    );
}
export default Why;