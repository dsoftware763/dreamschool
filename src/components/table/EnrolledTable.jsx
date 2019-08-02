import React from "react"
import searchicon2 from "../../assets/images/searchicon2.svg"
import whaticon from "../../assets/images/whaticon.svg"
import orangecircle from "../../assets/images/orangecircle.svg"
import greencircle from "../../assets/images/greencircle.svg"
import ppicon from "../../assets/images/halfppicon.svg"
import ppicon3 from "../../assets/images/ppicon3.svg"
import ppicon4 from "../../assets/images/ppicon4.svg"

const EnrolledTable = () => {
    return (
        <div className="cont">
        <div className="row">
          <div className="search">
            <div className="input">
              <input type="text" placeholder="Search by name" />

              <button>
                <img
                  src={searchicon2}
                  className="searchicon"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <div className="tablecont">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Student</th>
                  <th scope="col">
                    Start Date
                    <span className="whatisit">
                      <img src={whaticon} alt="" />

                      <div className="box">
                        <p>
                          <img src={orangecircle} alt="" />
                          Currently attending
                        </p>
                        <p>
                          <img src={greencircle} alt="" />
                          Deposit paid, start date pending
                        </p>
                      </div>
                    </span>
                  </th>
                  <th scope="col">End Date</th>
                  <th scope="col">Days of Week</th>
                  <th scope="col">Program Plan</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Owen Thompson</th>
                  <td>
                    <img
                      src={orangecircle}
                      className="circle"
                      alt=""
                    />
                    Dec 3, 2019
                  </td>
                  <td>June 3, 2019</td>
                  <td>Mon, Tue, Thur</td>
                  <td>
                    <img src={ppicon} className="ppimg" alt="" />
                    Plan A
                  </td>
                  <td>
                    <a href="#">VIEW</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Owen Thompson</th>
                  <td>
                    <img
                      src={greencircle}
                      className="circle"
                      alt=""
                    />
                    Dec 3, 2019
                  </td>
                  <td>June 3, 2019</td>
                  <td>Mon, Tue, Thur</td>
                  <td>
                    <img src={ppicon3} className="ppimg" alt="" />
                    Plan A
                  </td>
                  <td>
                    <a href="#">VIEW</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Owen Thompson</th>
                  <td>
                    <img
                      src={greencircle}
                      className="circle"
                      alt=""
                    />
                    Dec 3, 2019
                  </td>
                  <td>June 3, 2019</td>
                  <td>Mon, Tue, Thur</td>
                  <td>
                    <img src={ppicon4} className="ppimg" alt="" />
                    Plan A
                  </td>
                  <td>
                    <a href="#">VIEW</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="numb">
              <ul>
                <li className="activeno">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default EnrolledTable;