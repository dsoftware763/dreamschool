import React from 'react';
import bgmainslider from '../../assets/images/bgmainslider.png';
import searchicon from '../../assets/images/searchicon.png';
import sliderimg1 from '../../assets/images/sliderimg1.png';
import sliderimg2 from '../../assets/images/sliderimg2.jpg';
import leftarrow from '../../assets/images/leftarrow.png';
import rightarrow from '../../assets/images/rightarrow.png';

const Featured = () => {
    return (
        <div className="container-fluid slidercf slidercf2">
            <img src={bgmainslider} className="bgright" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Featured Dreamschools</h1>
                        <form className="search" accept-charset="UTF-8" method="get">
                            <input name="utf8" type="hidden" value="&#x2713;" />
                            <input type="text" name="q" id="q" placeholder="Search by name, address, or keyword" />
                            <button type="submit"><img src={searchicon} alt=""/></button>
                        </form>        
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">

                            {/* <!-- Wrapper for slides --> */}
                            <div className="carousel-inner">
                                <div className="item active">
                                    <img src={sliderimg1} alt=""/>
                                    <div className="row">
                                        <div className="col-md-7" style={{paddingLeft: 0}}>
                                            <h2>Little Hearts School</h2>
                                            <p>Dupont & Ossington, Toronto</p>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="btns">
                                                <p className="btnviewall"><a href="#">View all</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <img src={sliderimg2} alt=""/>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <h2>Little Tots Daycare</h2>
                                            <p>Dixie & Lakeshore, Mississauga</p>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="btns">
                                                <p className="btnviewall"><a href="#">View all</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        {/* <!-- Left and right controls --> */}
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
export default Featured;