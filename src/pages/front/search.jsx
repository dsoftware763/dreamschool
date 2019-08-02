import React from 'react';
import searchicon from '../../assets/images/searchicon.png';
import Private_preschool1 from '../../assets/images/Private_preschool1.jpg';
import daycare2 from '../../assets/images/daycare2.jpg';
import gallery_1 from '../../assets/images/gallery_1.jpg';

const Search = () => {
    return (<>
    <div className="container-fluid findushero">
        <div className="container">
            <div className="row">
                <div className="col-md-6 ">
                    <div className="address">
                        <h1>All Dreamschools near:</h1>
                    </div>
                </div>
                <div className="col-md-6 flex">
                    <form className="search" accept-charset="UTF-8" method="get">
                        <input name="utf8" type="hidden" value="&#x2713;" />
                        <input type="text" name="q" id="q" placeholder="Search by name, address, or keyword" />
                        <button type="submit"><img src={searchicon} alt=""/></button>
                    </form>      
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid dreamschoolsfind">
        <div className="container">
            <div className="row">
                <div className="col-md-6" id="find_list">
                    <a href="#">
                        <div className="box">
                            <div className="imgbox">
                                <img src={Private_preschool1} alt=""/>
                                <div className="hover">
                                    <h1>VIEW</h1>
                                </div>
                            </div>
                            <div className="textbox">
                                <h1>Lara&#39;s Wee Love Daycare</h1>
                                <p className="adress">Toronto</p>
                                <p className="para">The Honey Bees Dreamschool provides a home based supportive environment where children learn through play. </p>
                            </div>
                            <div className="price">
                                <p>starting at</p>
                                <h1>$42 <span>/ day</span></h1>
                            </div>
                        </div>
                    </a>  
                    <a href="#">
                        <div className="box">
                            <div className="imgbox">
                                <img src={daycare2} alt=""/>
                                <div className="hover">
                                    <h1>VIEW</h1>
                                </div>
                            </div>
                            <div className="textbox">
                                <h1>Ainishah&#39;s Daycare</h1>
                                <p className="adress">Toronto</p>
                                <p className="para">We are building a community of young learners who are passionate, empathetic, smart and understanding.  . </p>
                            </div>
                            <div className="price">
                                <p>starting at</p>
                                <h1>$49 <span>/ day</span></h1>
                            </div>
                        </div>
                    </a>  
                    <a href="#">
                        <div className="box">
                            <div className="imgbox">
                                <img src={gallery_1} alt=""/>
                                <div className="hover">
                                    <h1>VIEW</h1>
                                </div>
                            </div>
                            <div className="textbox">
                                <h1>Emily&#39;s Dreamschool</h1>
                                <p className="adress">Near Spadina and Queen, Toronto</p>
                                <p className="para">Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test . </p>
                            </div>
                            <div className="price">
                                <p>starting at</p>
                                <h1>$1 <span>/ day</span></h1>
                            </div>
                        </div>
                    </a>
                    <nav className="pagy-nav pagination" role="navigation" aria-label="pager">
                        <span className="page prev disabled">&lsaquo;&nbsp;Prev</span> 
                        <span className="page active">1</span> 
                        <span className="page">
                            <a href="#" data-remote="true"  rel="next" >2</a>
                        </span> 
                        <span className="page next">
                            <a href="#" data-remote="true"  rel="next" aria-label="next">Next&nbsp;&rsaquo;</a>
                        </span>
                    </nav>
                </div>
                <div className="col-md-6">
                    <div className="full-bg">
                    <div className="search-section">
                        <div className="fixed-map-4">
                        <div id="map" className="map-design" style={{height:" 816px"}}></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>);
}

export default Search;