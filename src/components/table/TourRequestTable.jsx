import React from "react"
import searchicon2 from "../../assets/images/searchicon2.svg"
import imgactivea from "../../assets/images/imgactivea.png"

const TourRequestTable = () => {
    return (
        <div className="cont">
        <div className="row">
          <div className="search">
            <div className="input">
              <input type="text" placeholder="Search by name" />

              <button>
                {" "}
                <img src={searchicon2} className="searchicon" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="tablecont">
          <div className="table-responsive">
            <ul>
              <li className="active">
                <a href="#">
                  <img src={imgactivea} className="foractive" alt="" />
                  MY PREFERENCE
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={imgactivea} className="foractive" alt="" />
                  VISITOR PREFERENCE
                </a>
              </li>
            </ul>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Visitor</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Logan Michaels</th>
                  <td>Jan 3 2019</td>
                  <td>10:00 AM</td>
                  <td>905 637 3727</td>
                  <td>emailaddress@gmail.com</td>
                  <td>
                    <a href="#">ACCEPT</a>
                    <a href="#">DENY</a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">Logan Michaels</th>
                  <td>Jan 3 2019</td>
                  <td>10:00 AM</td>
                  <td>905 637 3727</td>
                  <td>emailaddress@gmail.com</td>
                  <td>
                    <a href="#">ACCEPT</a>
                    <a href="#">DENY</a>
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

export default TourRequestTable