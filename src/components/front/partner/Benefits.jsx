import React  from 'react';
import calendar from '../../../assets/images/calendar.png';
import books from '../../../assets/images/books.png';
import piggy_bank from '../../../assets/images/piggy_bank.png';


const Benefits = () => {
    return (
        <div className="container-fluid providebenefits">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Benefits of starting your own Dreamschool</h1>

                        <div className="boxes">
                            <div className="box">
                                <div className="placeforimg">
                                    <div className="img">
                                        <img style={{maxWidth: "160px"}} src={calendar} alt="Calendar" />
                                    </div>
                                </div>
                                <div className="fortitle">
                                    <h2>SET YOUR OWN SCHEDULE</h2>
                                </div>
                                <p>Get more control over your time by setting your own teaching schedule</p>
                            </div>
                            <div className="box">
                                <div className="placeforimg">
                                    <div className="img">
                                        <img src={books} alt="Books" />
                                    </div>
                                </div>
                                <div className="fortitle">
                                    <h2>TEACH WHAT YOU LOVE</h2>
                                </div>
                                <p>Design your own curriculum<br/>and teaching philosophy</p>
                            </div>
                            <div className="box">
                                <div className="placeforimg">
                                    <div className="img">
                                        <img src={piggy_bank} alt="Piggy bank" />
                                    </div>
                                </div>
                                <div className="fortitle">
                                    <h2>MAKE MORE MONEY</h2>
                                </div>
                                <p>Earn more than in traditional<br/>child care centres and classNamerooms</p>
                            </div>
                        </div>
                    </div>
                <div className="col-md-12">
                    <div className="line"></div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Benefits;