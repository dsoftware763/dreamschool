import React from "react";
import { Link } from "react-router-dom";
import ImageActiveA from "../../assets/images/imgactivea.png";

const TuitionPaymentTable = () => {
  return (
      <div className="tablecont">
        <div className="table-responsive">
          <ul>
            <li className="active">
              <a href="#">
                <img src={ImageActiveA} className="foractive" alt="" />
                CURRENT
              </a>
            </li>
            <li>
              <a href="#">
                <img src={ImageActiveA} className="foractive" alt="" />
                ACCEPTED
              </a>
            </li>
          </ul>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Student</th>
                <th scope="col">Amount</th>
                <th scope="col">Service Period</th>
                <th scope="col">Status</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Logan Michaels</th>
                <td>$250.00</td>
                <td>June 1- June 8 2019</td>
                <td>Pending</td>
                <td>
                  <Link to="/parents/tuition-payments/view">VIEW</Link>
                </td>
              </tr>
              <tr>
                <th scope="row">Logan Michaels</th>
                <td>$250.00</td>
                <td>June 1- June 8 2019</td>
                <td>Pending</td>
                <td>
                  <Link to="/parents/tuition-payments/view">VIEW</Link>
                </td>
              </tr>
              <tr>
                <th scope="row">Logan Michaels</th>
                <td>$250.00</td>
                <td>June 1- June 8 2019</td>
                <td>Pending</td>
                <td>
                  <Link to="/parents/tuition-payments/view">VIEW</Link>
                </td>
              </tr>
              <tr>
                <th scope="row">Logan Michaels</th>
                <td>$250.00</td>
                <td>June 1- June 8 2019</td>
                <td>Pending</td>
                <td>
                  <Link to="/parents/tuition-payments/view">VIEW</Link>
                </td>
              </tr>
              <tr>
                <th scope="row">Logan Michaels</th>
                <td>$250.00</td>
                <td>June 1- June 8 2019</td>
                <td>Pending</td>
                <td>
                  <Link to="/parents/tuition-payments/view">VIEW</Link>
                </td>
              </tr>
              <tr>
                <th scope="row">Logan Michaels</th>
                <td>$250.00</td>
                <td>June 1- June 8 2019</td>
                <td>Pending</td>
                <td>
                  <Link to="/parents/tuition-payments/view">VIEW</Link>
                </td>
              </tr>
              <tr>
                <th scope="row">Logan Michaels</th>
                <td>$250.00</td>
                <td>June 1- June 8 2019</td>
                <td>Pending</td>
                <td>
                  <Link to="/parents/tuition-payments/view">VIEW</Link>
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
  );
};

export default TuitionPaymentTable;
