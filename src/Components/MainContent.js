import Footer from "./CommonComponents/Footer";
import Header from "./CommonComponents/Header";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { format } from "date-fns";


function MainContent() {
  const [startDate, setStartDate] = useState(new Date());

  const [reservation, setReservation] = useState();
  const [reservation_seated, setReservationSeated] = useState();
  const [is_walkin, setIsWalkin] = useState();
  const [reservation_repeated, setReservationRepeated] = useState();
  const [total_seated, setTotalSeated] = useState();

  useEffect(() => {
    restaurantstatistics();
  }, [startDate]);

  const restaurantstatistics = async () => {
    const d = format(startDate, "Y-MM-d");

    const data = {
      d: d,
    };

    const res = await axios
      .post(`/restaurant_statistics`, data)
      .catch((err) => {
        console.log("Err", err);
      });

    console.log(res.data);

    setReservation(res.data.reservation);
    setReservationSeated(res.data.reservation_seated);
    setIsWalkin(res.data.is_walkin);
    setReservationRepeated(res.data.reservation_repeated);
    setTotalSeated(res.data.total_seated);
  };

  return (
    <>
      <ToastContainer position="top-right" />

      <Header />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard </h1>

          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="index.html">Home</Link>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
              <style>
                {`.date-picker input {
              float: right;

            }`}
              </style>
              <DatePicker
                dateFormat="yyyy-MM-dd"
                wrapperClassName="date-picker"
                // showTimeSelect
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                popperPlacement="top-end"
                value={startDate}
                name="datepick"
                // timeClassName={handleColor}
              />
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
                      <h5 className="card-title">Reservation</h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-shop"></i>
                        </div>
                        <div className="ps-3">
                          <h6>{reservation}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card revenue-card">
                    <div className="card-body">
                      <h5 className="card-title">Reservation Seated</h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-people-fill"></i>
                        </div>
                        <div className="ps-3">
                          <h6>{reservation_seated}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card customers-card">
                    <div className="card-body">
                      <h5 className="card-title">Is Walkin</h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-shop"></i>
                        </div>
                        <div className="ps-3">
                          <h6>{is_walkin}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card customers-card">
                    <div className="card-body">
                      <h5 className="card-title">Total Seated</h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-shop"></i>
                        </div>
                        <div className="ps-3">
                          <h6>{total_seated}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card customers-card">
                    <div className="card-body">
                      <h5 className="card-title">Reservation Repeated</h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-shop"></i>
                        </div>
                        <div className="ps-3">
                          <h6>{reservation_repeated}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Reports <span>/Today</span>
                      </h5>

                      <div id="reportsChart"></div>
                      Scripts are called here for graph from public/index.html
                    </div>
                  </div>
                </div> */}

                {/* <div className="col-12">
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
                </div> */}

                {/* <div className="col-12">
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
            </div> */}

                {/* <div className="col-lg-4">
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
                  Pei Chart scripts are call here from public/index.html file
                </div>
              </div> */}

                {/* <div className="card">
                <div className="card-body pb-0">
                  <h5 className="card-title">
                    Whatsapp Avaiable vs Spent vs Daily Spent
                  </h5>

                  <div
                    id="whatappChart"
                    style={{ minHeight: "400px" }}
                    className="echart"
                  ></div>

                  Pei Chart scripts are call here from public/index.html file
                </div>
              </div> */}
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
