import React from 'react';
import sliderbg from '../../../assets/images/sliderbg.png';
import sliderimg1 from '../../../assets/images/sliderimg1.png';
import sliderimg2 from '../../../assets/images/sliderimg2.jpg';
import leftarrow from '../../../assets/images/leftarrow.png';
import rightarrow from '../../../assets/images/rightarrow.png';

const Gallery = () => {
    return (
        <div className="container-fluid slidercf">
            <img src={sliderbg} className="bgleft" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Dreamschools Gallery</h1>
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="item active">
                                    <img src={sliderimg1} alt=""/>
                                    <p> Valerie has been a partner at Dreamschools for 8 months. <br/>
                                    This is her home daycare, Little Hearts School.</p>
                                </div>

                                <div className="item">
                                    <img src={sliderimg2} alt=""/>
                                    <p> Shazia has been a partner at Dreamschools for 6 months. <br/>
                                    This is her home daycare, Little Tots Daycare.</p>
                                </div>
                            </div>
                            <a className="leftarrow" href="#myCarousel" data-slide="prev">
                                <img src={leftarrow} alt=""/>
                            </a>
                            <a className="rightarrow" href="#myCarousel" data-slide="next">
                                <img src={rightarrow} alt=""/>
                            </a>
                        </div>

                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Gallery;