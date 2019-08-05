import React from 'react';
import searchicon2 from '../../assets/images/searchicon2.svg';

const Promotions = () => {
    return (
        <div className="admin">
          <div className="container-fluid adminpromotion">
          	<div className="row">
          		<div className="col-md-12">
          			<h1>Promotions</h1>
          		</div>
          	</div>
			      {/* <!-- The Modal --> */}
            <div className="modal" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content">
           
                {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                    <h4 className="modal-title">CREATE NEW PROMOTION</h4>
                    <button type="button" className="close" data-dismiss="modal"><img src="img/popupclose.svg" alt=""/></button>
                  </div>
             
                {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Internal Name</p>
                      </div>
                      <div className="col-md-6">
                        <input type="text" placeholder="" value="Founding Family Discount"/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <p>Valid </p>
                      </div>
                      <div className="col-md-6">
                        <div  className="fromda">
                          <input type="date" name="dateofbirth" id="dateofbirth"/> 
                        </div>
                        <div className="toda">
                          <input type="date" name="dateofbirth" id="dateofbirth"/>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <p>Active Timeframe </p>
                      </div>
                      <div className="col-md-6">
                        <select>
                          <option value="">First Week</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                        </select>

                      </div>
                    </div>


                    <div className="row">
                      <div className="col-md-6">
                        <p>Discount Amount </p>
                      </div>
                      <div className="col-md-6">
                        <div className="input1">
                          <img src="img/unactivepop.svg" className="unactive" alt=""/>
                          <img src="img/activepop.svg" className="activepop" alt=""/>
                          <input type="text" placeholder=""/>
                        </div>
                        <div className="input2 activeinput">
                          <img src="img/unactivepop.svg" className="unactive" alt=""/>
                          <img src="img/activepop.svg" className="activepop" alt=""/>
                          <input type="text" placeholder="" value="20%"/>
                        </div>

                      </div>
                    </div>

                  <div className="row">
                    <div className="col-md-12">
                      <p>Educators</p>
                    </div>
                    <div className="col-md-12">
                      <textarea name="" id=""></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <p>Use Limit</p>
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="" value="5"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <p>Code</p>
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="" value="FIRST07A"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="buttons">
                        <a href="#" className="nextbtn">SUBMIT</a>
                      </div>
                    </div>
                  </div>
               
            </div>
             
           </div>
         </div>
       </div>
      			<div className="cont">
              <div className="row">
                <div className="col-md-6">
                  <div className="forbtnapp">
                    <a href="#" className="newapplications" data-toggle="modal" data-target="#myModal">
                      <img src="img/newapplicationsbtn.svg" alt=""/>New Promotion
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="search">
                    <div className="input">
                      <input type="text" placeholder="Search by name"/>
                     
                      <button> <img src={searchicon2} className="searchicon" alt=""/></button>
                    </div>
                  </div>
                </div>
              </div>
      				<div className="tablecont">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Internal Name</th>
                        <th scope="col">Valid For </th>
                        <th scope="col">Active Timeframe</th>
                        <th scope="col">Discount Amount</th>
                        <th scope="col">Educators</th>
                        <th scope="col">Use Limit</th>
                        <th scope="col">Code</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th scope="row">Founding Family Discount</th>
                      <td>Jan 1 2019 - Oct 1 2019</td>
                      <td>First day</td>
                      <td>$45</td>
                      <td>Janice Michelle,</td>
                      <td>30</td>
                      <td>CARE07A</td>
                      <td>Active</td>
                    </tr>
                    <tr>
                      <th scope="row">Founding Family Discount</th>
                      <td>Jan 1 2019 - Oct 1 2019</td>
                      <td>First day</td>
                      <td>$45</td>
                      <td>Janice Michelle,</td>
                      <td>30</td>
                      <td>CARE07A</td>
                      <td>Active</td>
                    </tr>
                    <tr>
                      <th scope="row">Founding Family Discount</th>
                      <td>Jan 1 2019 - Oct 1 2019</td>
                      <td>First day</td>
                      <td>$45</td>
                      <td>Janice Michelle,</td>
                      <td>30</td>
                      <td>CARE07A</td>
                      <td>Active</td>
                    </tr>
                    
                      
                    </tbody>
                  </table>
                  <div className="numb">
                    <ul>
                      <li className="activeno"><a href="">1</a></li>
                      <li><a href="">2</a></li>
                      <li><a href="">3</a></li>
                    </ul>
                  </div>
                </div>
              </div>
      			</div>

        </div>
        </div>
    );
}
export default Promotions