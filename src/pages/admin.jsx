import React from 'react';
import LineChart from '../components/charts/Line';
import DoughnutChart from '../components/charts/Doughnut';
import Earning from '../components/admin/Earning';
import Projects from '../components/admin/Projects';
import undrawPosting from '../assets/images/undraw_posting_photo.svg';

const Admin = () => {
    return (
        // <!-- Begin Page Content -->
        <div className="container-fluid">

          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>

          {/* <!-- Content Row --> */}
            <Earning/>

          {/* <!-- Content Row --> */}

          <div className="row">

            {/* <!-- Area Chart --> */}
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                  <div className="dropdown no-arrow">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                      <div className="dropdown-header">Dropdown Header:</div>
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Body --> */}
                <div className="card-body">
                  <div className="chart-area">
                    <LineChart/>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Pie Chart --> */}
            <div className="col-xl-4 col-lg-5">
              <div className="card shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                  <div className="dropdown no-arrow">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                      <div className="dropdown-header">Dropdown Header:</div>
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Body --> */}
                <div className="card-body">
                  <div className="chart-pie pt-4 pb-2">
                    <DoughnutChart/>
                  </div>
                  <div className="mt-4 text-center small">
                    <span className="mr-2">
                      <i className="fas fa-circle text-primary"></i> Direct
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-circle text-success"></i> Social
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-circle text-info"></i> Referral
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Content Row --> */}
          <div className="row">

            {/* <!-- Content Column --> */}
            <div className="col-lg-6 mb-4">

              {/* <!-- Project Card Example --> */}
              <Projects/>

              {/* <!-- Color System --> */}
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card bg-primary text-white shadow">
                    <div className="card-body">
                      Primary
                      <div className="text-white-50 small">#4e73df</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-success text-white shadow">
                    <div className="card-body">
                      Success
                      <div className="text-white-50 small">#1cc88a</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-info text-white shadow">
                    <div className="card-body">
                      Info
                      <div className="text-white-50 small">#36b9cc</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-warning text-white shadow">
                    <div className="card-body">
                      Warning
                      <div className="text-white-50 small">#f6c23e</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-danger text-white shadow">
                    <div className="card-body">
                      Danger
                      <div className="text-white-50 small">#e74a3b</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-secondary text-white shadow">
                    <div className="card-body">
                      Secondary
                      <div className="text-white-50 small">#858796</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-lg-6 mb-4">

              {/* <!-- Illustrations --> */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={undrawPosting} alt=""/>
                  </div>
                  <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
                  <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on unDraw &rarr;</a>
                </div>
              </div>

              {/* <!-- Approach --> */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                </div>
                <div className="card-body">
                  <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce CSS bloat and poor page performance. Custom CSS classNamees are used to create custom components and custom utility classNamees.</p>
                  <p className="mb-0">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classNamees.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
        // <!-- /.container-fluid -->
    );
}

export default Admin;