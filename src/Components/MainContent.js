import Footer from "./CommonComponents/Footer";
import Header from "./CommonComponents/Header";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";


function MainContent() {
  return (
    <>
      <ToastContainer position="top-right" />

      <Header />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="index.html">Home</Link>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title">Vendors Registered</h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-shop"></i>
                        </div>
                        <div className="ps-3">
                          <h6>145</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card revenue-card">
                    <div className="card-body">
                      <h5 className="card-title">Total Customer</h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-people-fill"></i>
                        </div>
                        <div className="ps-3">
                          <h6>200</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card customers-card">
                    <div className="card-body">
                      <h5 className="card-title">Total Restaurants</h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-shop"></i>
                        </div>
                        <div className="ps-3">
                          <h6>1244</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Reports <span>/Today</span>
                      </h5>

                      <div id="reportsChart"></div>
                      {/* Scripts are called here for graph from public/index.html */}
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card recent-sales overflow-auto">
                    <div className="card-body">
                      <h5 className="card-title">
                        Recent Sales <span>| Today</span>
                      </h5>

                      <table className="table table-borderless datatable">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <Link to="#">#2457</Link>
                            </th>
                            <td>Brandon Jacob</td>
                            <td>
                              <Link to="#" className="text-primary">
                                At praesentium minu
                              </Link>
                            </td>
                            <td>$64</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <Link to="#">#2147</Link>
                            </th>
                            <td>Bridie Kessler</td>
                            <td>
                              <Link to="#" className="text-primary">
                                Blanditiis dolor omnis similique
                              </Link>
                            </td>
                            <td>$47</td>
                            <td>
                              <span className="badge bg-warning">Pending</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card top-selling overflow-auto">
                    <div className="card-body pb-0">
                      <h5 className="card-title">
                        Top Selling <span>| Today</span>
                      </h5>

                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Preview</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Revenue</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <Link to="#">
                                <img src="assets/img/product-1.jpg" alt="" />
                              </Link>
                            </th>
                            <td>
                              <Link to="#" className="text-primary fw-bold">
                                Ut inventore ipsa voluptas nulla
                              </Link>
                            </td>
                            <td>$64</td>
                            <td className="fw-bold">124</td>
                            <td>$5,828</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <Link to="#">
                                <img src="assets/img/product-2.jpg" alt="" />
                              </Link>
                            </th>
                            <td>
                              <Link to="#" className="text-primary fw-bold">
                                Exercitationem similique doloremque
                              </Link>
                            </td>
                            <td>$46</td>
                            <td className="fw-bold">98</td>
                            <td>$4,508</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body pb-0">
                  <h5 className="card-title">
                    SMS Avaiable vs Spent vs Daily Spent
                  </h5>

                  <div
                    id="trafficChart"
                    style={{ minHeight: "400px" }}
                    className="echart"
                  ></div>
                  {/* Pei Chart scripts are call here from public/index.html file */}
                </div>
              </div>

              <div className="card">
                <div className="card-body pb-0">
                  <h5 className="card-title">
                    Whatsapp Avaiable vs Spent vs Daily Spent
                  </h5>

                  <div
                    id="whatappChart"
                    style={{ minHeight: "400px" }}
                    className="echart"
                  ></div>

                  {/* Pei Chart scripts are call here from public/index.html file */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default MainContent;
