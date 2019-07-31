import React from "react";
import NewApplicationBtn from "../../assets/images/newapplicationsbtn.svg";
import ImageActiveA from "../../assets/images/imgactivea.png";

const Table = () => {
  return (
    <div className="cont">
      <div className="tablecont">
        <div className="table-responsive">
          <ul>
            <li className="active">
              <a href="">
                <img src={ImageActiveA} className="foractive" alt="" />
                PENDING RESPONSE
              </a>
            </li>
            <li>
              <a href="">
                <img src={ImageActiveA} className="foractive" alt="" />
                ACCEPTED
              </a>
            </li>
            <li>
              <a href="">
                <img src={ImageActiveA} className="foractive" alt="" />
                WAITLISTED
              </a>
            </li>
            <li>
              <a href="">
                <img src={ImageActiveA} className="foractive" alt="" />
                REJECTED
              </a>
            </li>
          </ul>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Program</th>
                <th scope="col">Child</th>
                <th scope="col">Plan</th>
                <th scope="col">Duration</th>
                <th scope="col">Application Date</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Ladybug and Unicorn Daycare</th>
                <td>Logan Michaels</td>
                <td>Plan A</td>
                <td>Jan 1 - Oct 1 2019</td>
                <td>Jan 23, 2019</td>
                <td>
                  <a href="">VIEW</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Ladybug and Unicorn Daycare</th>
                <td>Logan Michaels</td>
                <td>Plan A</td>
                <td>Jan 1 - Oct 1 2019</td>
                <td>Jan 23, 2019</td>
                <td>
                  <a href="">VIEW</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Ladybug and Unicorn Daycare</th>
                <td>Logan Michaels</td>
                <td>Plan A</td>
                <td>Jan 1 - Oct 1 2019</td>
                <td>Jan 23, 2019</td>
                <td>
                  <a href="">VIEW</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table