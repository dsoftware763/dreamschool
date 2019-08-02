import React from 'react';

const Questions = () => {
    return (
        <div className="container-fluid bstoggle">
            <a href="#" className="anchor" id="FAQ"></a>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Commonly asked questions</h1>
                        <div className="maxwidthbox">
                            <div className="panel-group" id="accordion">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Why choose us?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse1" className="panel-collapse collapse">
                                        <div className="panel-body">Educators partnering with Dreamschools are given the opportunity to become
                                        business owners while receiving all of the tools and support they need to run the program of their
                                        dreams, while having the freedom to keep their focus on the children. Families who choose Dreamschools
                                        enjoy quality childcare solutions from our hand-picked providers in a home-like environment, that is
                                        affordable and convenient.
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">How do I get started?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse2" className="panel-collapse collapse">
                                        <div className="panel-body">For Educators, reach out to Dreamschools, go through our background checks, set
                                        up your program, get listed, and start enrolling! For Families, find and tour programs, create an
                                        application, manage waitlist, get accepted, and start loving life!
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">What are the benefits of home
                                            child care?</a>
                                        </h4>
                                    </div>
                                    <div id="collapse3" className="panel-collapse collapse">
                                        <div className="panel-body">It’s a Home away from Home! Dreamschools programs offer smaller group sizes,
                                        closer bonds between the Educator and families, affordable solutions, and individualized attention and
                                        care.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;