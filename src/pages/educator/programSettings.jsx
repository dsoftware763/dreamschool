import React from 'react';
import searchicon2 from '../../assets/images/searchicon2.svg';
import psicon from '../../assets/images/psicon.svg';

const ProgramSettings = () => {
    return (
        <div className="admin">
            <div className="container-fluid programsettings">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Program Settings</h1>
                    </div>
                </div>
			
      			<div className="cont">
                    <div className="row">
                        <div className="search">
                            <div className="input">
                                <input type="text" placeholder="Search by name"/>
                                <button> <img src={searchicon2} className="searchicon" alt=""/></button>
                            </div>
                        </div>
                    </div>
      				<div className="tablecont">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">EDUCATOR <img src={psicon} alt=""/></th>
                                        <th scope="col">PROGRAM <img src={psicon} alt=""/></th>
                                        <th scope="col">SET-UP STATUS</th>
                                        <th scope="col">INCOMPLETE SECTIONS <img src={psicon} alt=""/></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">Sarah Lin</th>
                                    <td>Ladybug Dreamschool</td>
                                    <td>Complete</td>
                                    <td>-</td>
                                    <td>
                                        <a href="">PRICING PLAN</a>
                                        <a href="">PROGRAM SETUP</a>
                                        <a href="">MILESTONES</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Sarah Lin</th>
                                    <td>Ladybug Dreamschool</td>
                                    <td>Complete</td>
                                    <td>-</td>
                                    <td>
                                        <a href="">PRICING PLAN</a>
                                        <a href="">PROGRAM SETUP</a>
                                        <a href="">MILESTONES</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Sarah Lin</th>
                                    <td>Ladybug Dreamschool</td>
                                    <td>Complete</td>
                                    <td>-</td>
                                    <td>
                                        <a href="">PRICING PLAN</a>
                                        <a href="">PROGRAM SETUP</a>
                                        <a href="">MILESTONES</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="numb">
                            <ul>
                                <li className="activeno"><a href="">1</a></li>
                                <li><a href="">2</a></li>
                                <li><a href="">3</a></li>
                                <li><a href="">...</a></li>
                                <li><a href="">8</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
      	    </div>

        </div>
    </div>
    );
}

export default ProgramSettings;