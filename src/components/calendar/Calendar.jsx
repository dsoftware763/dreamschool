import React from 'react';
import arrowrightcal from '../../assets/images/arrowrightcal.svg';
import arrowleftcal from '../../assets/images/arrowleftcal.svg';

const Calendar = () => {
    return (
        <div className="boxofcalendar">
            <p className="mounth">
            <a href="#" className="arrowleftcal" >
                <img src={arrowleftcal} alt=""/>
            </a>July 2019
            <a href="#" className="arrowrightcal" >
                <img src={arrowrightcal} alt=""/>
            </a>
            </p>

            <div className="calendar">
                <div className="elementbox">
                    <div className="boxwidth">
                        <p>MON</p>
                    </div>
                    <div className="boxwidth">
                        <p>TUE</p>
                    </div>
                    <div className="boxwidth">
                        <p>WED</p>
                    </div>
                    <div className="boxwidth">
                        <p>THU</p>
                    </div>
                    <div className="boxwidth">
                        <p>FRI</p>
                    </div>
                    <div className="boxwidth">
                        <p>SAT</p>
                    </div>
                    <div className="boxwidth">
                        <p>SUN</p>
                    </div>


                    <div className="nom">
                        <div className="boxwidthcal">
                            <p>1</p>
                        </div>
                        <div className="lineinc from1to5 firstline blueline">
                            <p>Sarah Johnson is on vacation</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>2</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>3</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>4</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>5</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>6</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>7</p>
                        </div>
                    </div>
                    <div className="nom">
                        <div className="boxwidthcal">
                            <p>8</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>9</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>10</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>11</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>12</p>
                        </div>
                        <div className="boxwidthcal activeno">
                            <p>13</p>
                            <div className="greenactivebgofno">
                            </div>
                        </div>
                        <div className="boxwidthcal">
                            <p>14</p>
                        </div>
                    </div>
                    <div className="nom">
                        <div className="lineinc from4to7 line3 orangeline">
                            <p>Chuck will be absent</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>15</p>
                        </div>
                        <div className="boxwidthcal activeno">
                            <div className="orangeactivebgofno">
                            </div>
                            <p>16</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>17</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>18</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>19</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>20</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>21</p>
                        </div>
                    </div>
                    <div className="nom">
                        <div className="lineinc from3to4 line4 greenline">
                            <div className="divfortext">
                                <p>Melody will be picked up by dad </p>
                            </div>

                            <div className="hoverline">
                                <img src="img/arrowhovercal.png" alt=""/>
                                <div className="header">
                                    <h1>Chuck will be absent</h1>
                                    <p>July 19 All Day - July 21 All Day </p>
                                    <a href="#" className="colour">Colour <div className="coln"></div></a>
                                </div>
                                <div className="bodyh">
                                    <h2>CHILD</h2>
                                    <p>Chuck Stevens</p>
                                    <h2>TYPE</h2>
                                    <p>Attendance</p>
                                    <h2>NOTES</h2>
                                    <p>Chuck is going to be away on a family trip. He will return for a half day on the 21st. </p>
                                </div>
                            </div>
                        </div>
                        <div className="boxwidthcal">
                            <p>22</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>23</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>24</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>25</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>26</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>27</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>28</p>
                        </div>
                    </div>
                    <div className="nom">
                        <div className="boxwidthcal">
                            <p>29</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>30</p>
                        </div>
                        <div className="boxwidthcal">
                            <p>31</p>
                        </div>
                        <div className="boxwidthcal">
                            <p className="newmon">1</p>
                        </div>
                        <div className="boxwidthcal">
                            <p className="newmon">2</p>
                        </div>
                        <div className="boxwidthcal">
                            <p className="newmon">3</p>
                        </div>
                        <div className="boxwidthcal">
                            <p className="newmon">4</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Calendar;