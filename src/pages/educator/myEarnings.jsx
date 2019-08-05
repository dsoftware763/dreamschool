import React from "react"
import MyEarningsModal from "../../components/modals/MyEarningsModal";
import LineChart from "../../components/charts/Line";
import ddicon from "../../assets/images/ddicon.svg"
import arrowdownselect from "../../assets/images/arrowdownselect.svg"

const MyEarnings = () => {
    return (
        <div className="container-fluid my_earning">
          <div className="row">
            <div className="col-md-12">
              <h1>My Earnings</h1>
            </div>
          </div>
          <div className="cont">
            
            <MyEarningsModal />

            <div className="row">
              <div className="col-xl-6 col-xl-6-new">
                <div className="tablebox tablebox3">
                  <div className="tableheader">
                    <div className="row">
                      <div className="col-md-12">
                        <h2>ALL RECENT DEPOSITS <img src={ddicon} alt="" /></h2>
                      </div>
                    </div>
                  </div>
                  <div className="tablebody">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Deposited</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Service Period</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">-</th>
                            <td>$686.70</td>
                            <td>Jan 1- Feb 1 2019</td>
                            <td><a href="" className="btnt pending">Pending</a></td>
                            <td><a href="" className="link">View</a></td>
                          </tr>
                          <tr>
                            <th scope="row">-</th>
                            <td>$1636.00</td>
                            <td>Jan 1- Feb 1 2019</td>
                            <td><a href="" className="btnt failed">Failed</a></td>
                            <td><a href="" className="link">View</a></td>
                          </tr>
                          <tr>
                            <th scope="row">March 1 2019</th>
                            <td>$1636.00</td>
                            <td>Jan 1- Feb 1 2019</td>
                            <td><a href="" className="btnt paid">Paid</a></td>
                            <td><a href="" className="link">View</a></td>
                          </tr>
                          <tr>
                            <th scope="row">March 1 2019</th>
                            <td>$1636.00</td>
                            <td>Jan 1- Feb 1 2019</td>
                            <td><a href="" className="btnt paid">Paid</a></td>
                            <td><a href="" className="link">View</a></td>
                          </tr>
                          <tr>
                            <th scope="row">March 1 2019</th>
                            <td>$1636.00</td>
                            <td>Jan 1- Feb 1 2019</td>
                            <td><a href="" className="btnt paid">Paid</a></td>
                            <td><a href="" className="link">View</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
                <div className="col-xl-6 col-xl-6-new">
                  <div className="tablebox">
                    <div className="tableheader">
                      <div className="row">
                        <div className="col-md-7">
                          <h2>EARNING OVERVIEW</h2>
                        </div>
                        <div className="col-md-5">
                          <div className="select">
                            <select>
                                <option value="0">By Year:</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                              <img src={arrowdownselect} className="arrowdownselect" alt="" />

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tablebody">
                      <h2><span>$1572.80</span><br /> Cumulative</h2>
                      <div className="chart-area">
                        <LineChart />
                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </div>

          
        </div>
        
    )
}

export default MyEarnings