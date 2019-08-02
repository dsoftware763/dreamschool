import React from 'react';
import Wix2  from '../../../assets/images/Wix2.jpg';
import Wix3  from '../../../assets/images/Wix3.jpg';
import Wix5  from '../../../assets/images/Wix5.jpg';
import Wix6  from '../../../assets/images/Wix6.jpg';

const RightColumn = () => {
    return (
        <div className="col-lg-2" id="rightside">
            <div className="rightside">
                <div className="gallery">
                    <h2>GALLERY</h2>
                    <div className="images">
                        <img src={Wix2} className="img-responsive gal-image" alt=""/>
                        <img src={Wix3} className="img-responsive gal-image" alt=""/>
                        <img src={Wix5} className="img-responsive gal-image" alt=""/>
                        <img src={Wix6} className="img-responsive gal-image" alt=""/>
                    </div>
                </div>
  
                <div className="location">
                    <h2>LOCATION</h2>
                    <div className="adress">
                        Toronto, Ontario
                    </div>
                    <div className="school-page-rail-Map">
                        <div>
                            <div id="map" className="teacher-prof-map"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RightColumn;