import React from 'react';
import {Link} from 'react-router-dom';
import redesign_logo from '../../assets/images/redesign-logo.png';
import searchicon from '../../assets/images/searchicon.png';
const Header = () => {
    return (
        <header className="fixed-header">
            <nav className="navbar navbar-default custom-navbar" role="navigation">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="col-lg-4">
                    <div className="navbar-header">
                    <Link to="/">
                        <img className="school-logo" src={redesign_logo} alt="Redesign logo" />
                    </Link>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    </div>
                </div>
      
                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div className="col-lg-8" style={{float: 'initial'}}>
                    <div className="collapse navbar-collapse flex-important" id="bs-example-navbar-collapse-1">

                        <div className="col-lg-6">
                            <div className="search-header">
                                <form id="search_form" className="search" acceptCharset="UTF-8" method="get">
                                    <input name="utf8" type="hidden" value="&#x2713;" />
                                    <input type="text" name="q" id="q" placeholder="Search by name, address, or keyword" />
                                    <button type="submit"><img src={searchicon} alt=""/></button>
                                </form>            
                            </div>
                        </div>
                        <div className="col-lg-6 right" style={{marginLeft: 'auto', float: 'initial'}}>
                            <ul className="nav navbar-nav navbar-right custom-right-navbar">
                                <li><span className="glyphicon glyphicon-th-list my-toggle"></span></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/search">Find</Link></li>
                                <li><Link to="/partner">Provide</Link></li>
                                <li><Link className="nav-link" to="/login">Log in</Link></li>
                                <li><Link className="nav-link" to="/signup">Family Sign Up</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- /.navbar-collapse --> */}
            </nav>
            <div className="desktop-menu">
                <ul className="desktop-menu-list">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/search">Find</Link></li>
                    <li><Link to="/partner">Provide</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;