import React from 'react';
import searchicon2 from '../../assets/images/searchicon2.svg';
import psicon from '../../assets/images/psicon.svg';

const ProgramSettings = () => {
    return (
        <div className="admin">
            <div className="container-fluid adminprofiles">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Family Profiles</h1>
                    </div>
                </div>
			
                <div className="cont">
              <div className="row">
                <div className="search">
                  <div className="input">
                    <input type="text" placeholder="Search by educator name"/>
                   
                    <button> <img src={searchicon2} className="searchicon" alt=""/></button>
                  </div>
                </div>
              </div>
      				<div className="tablecont">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Parent</th>
                        <th scope="col">Children</th>
                        <th scope="col">Enrolled Children</th>
                        <th scope="col">Program Name</th>
                        <th scope="col">In System Since</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th scope="row">Jane Michaels</th>
                      <td>5</td>
                      <td><span className="orange">3/5</span></td>
                      <td>Janice’s Dreamschool for…</td>
                      <td>Jan 5 2019</td>
                      <td>
                        <a href="#">View More</a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Jane Michaels</th>
                      <td>5</td>
                      <td><span className="red">3/5</span></td>
                      <td>Janice’s Dreamschool for…</td>
                      <td>Jan 5 2019</td>
                      <td>
                        <a href="#">View More</a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Jane Michaels</th>
                      <td>5</td>
                      <td><span className="green">3/5</span></td>
                      <td>Janice’s Dreamschool for…</td>
                      <td>Jan 5 2019</td>
                      <td>
                        <a href="">View More</a>
                      </td>
                    </tr>
                    
                      
                    </tbody>
                  </table>
                  <div className="numb">
                    <ul>
                      <li className="activeno"><a href="">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">...</a></li>
                      <li><a href="#">8</a></li>
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