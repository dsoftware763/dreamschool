import React from "react";
import {Link} from 'react-router-dom';
import imgsucc from '../../assets/images/imgsucc.svg';
import checksuc from '../../assets/images/checksuc.svg';

class FillApplication extends React.PureComponent {
  render () {
    return (
      <div className="container-fluid new_application new_application_5">
        <div className="row">
          <div className="col-md-12">
            <h1>New Application</h1>
          </div>
        </div>
			     
        <div className="cont">
          <div className="contbox_5">
            <div className="imgdiv">
              <div className="img">
                <img src={imgsucc} alt=""/>
                <img src={checksuc} className="check" alt=""/>
              </div>
              <h1>You have successfully applied to:</h1>
              <h2>Emily’s Dreamschool</h2>
              <a href="#">View application</a>
              <div className="row">
                <div className="col-md-12">
                  <p  className="btns"><Link to="/parents/interested-programs/new">NEW APPLICATION</Link></p>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    );
  }

};

export default FillApplication;
