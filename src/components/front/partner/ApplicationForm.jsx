import React from 'react';
import submitimg from '../../../assets/images/submitimg.png';

const ApplicationForm = () => {
    return (
        <div className="container-fluid providesubmitform">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <form className="submit-form" id="new_teacher" accept-charset="UTF-8" method="post">
                            <input name="utf8" type="hidden" value="&#x2713;" />
                            <input type="hidden" name="authenticity_token" value="hWQY3lFUoN9WtyQpFOerNNErCXB/JQVWvZG3kSQPjeCReBq9ZgOnJYOuJ5r/X2gff5nlSN249vINf54PO1ZiSw==" />
                            <h2>Initiate your pre-application today!</h2>
                            <p style={{marginBottom: "30px"}}>Our team will be in touch with you shortly</p>
                            <input placeholder="Name" className="input_fields" type="text" name="teacher[name]" id="teacher_name" />
                            <input placeholder="Email" className="input_fields" type="email" value="" name="teacher[email]" id="teacher_email" />
                            <input placeholder="Telephone Number" className="input_fields telephone_no" type="tel" name="teacher[telephone_no]" id="teacher_telephone_no" />
                            <input placeholder="Postal Code" className="input_fields postal_code" type="text" name="teacher[postal_code]" id="teacher_postal_code" />
                            <input type="submit" name="commit" value="SUBMIT" className="btn-default submit-btn" data-disable-with="SUBMIT" />
                            <p style={{marginBottom: "7px"}}><span>By performing this action, you agree to our <a className="term-link" target="_blank" href="terms-of-use.html">Terms of Use</a> and <a className="term-link" target="_blank" href="privacy-policy.html">Privacy Policy</a></span></p>
                        </form>
                    </div>
                    <div className="col-lg-6 flex">
                        <img src={submitimg} className="img-responsive" alt=""/>
                    </div>
                    <div className="col-lg-12">
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplicationForm;