import React from 'react';
import MainBanner from '../../components/front/educator/MainBanner';
import TeacherProfile from '../../components/front/educator/TeacherProfile';
import CenterColumn from '../../components/front/educator/CenterColumn';
import LeftColumn from '../../components/front/educator/LeftColumn';
import RightColumn from '../../components/front/educator/RightColumn';
import mail from '../../assets/images/mail.png';
const Educator = () => {
    return (<>
       <MainBanner/>
       <TeacherProfile/>
        <div className="container-fluid tcontent">
            <div className="profile-container">
                <CenterColumn/>
                <LeftColumn/>
                <RightColumn/>
            </div>
            <div className="btnsdown">
                <div className="col-md-12">
                    <a className="btn2" data-remote="true" href="educator/request-info-new-pagebd67.html?status=login">
                        <img src={mail} alt=""/>Request Information
                    </a>
                </div>
            </div>
        </div>
    </>);
}

export default Educator;