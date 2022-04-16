import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getreservation } from "../redux/actions/reservationAction";
import Pagination from "react-js-pagination";

function ListReservation() {
  const reservation = useSelector(
    (state) => state.reservationReducer.reservation
  );
  const dispatch = useDispatch();

  const fetchReservation = async (pageNumber = 1) => {
    const res = await axios
      .get(`/getvendor_reservation?page=${pageNumber}`)
      .catch((err) => {
        console.log("Err", err);
      });
    // console.log(res.data.links);
    dispatch(getreservation(res.data));
    return reservation;

  };

  useEffect(() => {
    fetchReservation();
  }, []);

  const PageClick = () => {
    const {
      current_page,
      per_page,
      total,
    } = reservation;

    //  console.log("woh: ", reservation)
    return (
      <>
        <Pagination
          activePage={current_page}
          itemsCountPerPage={per_page}
          totalItemsCount={total}
          onChange={handlePageClick}
          pageRangeDisplayed={6}
          itemClass="page-item"
          linkClass="page-link"
          firstPageText="First Page"
          lastPageText="Last Lage"
        />
      </>
    );
  };

  const handlePageClick = (data) => {
    fetchReservation(data);
  };

  const renderList = reservation?.data?.map((reservation) => {
    const {
      id,
      name,
      phone,
      email,
      date,
      time,
      no_of_occupancy,
      table_type_id,
      restaurant_id,
    } = reservation;
    return (
      <tr key={id}>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{date}</td>
        <td>{time}</td>
        <td>{no_of_occupancy}</td>
        {/* <td>{table_type_id}</td>
              <td>{restaurant_id}</td> */}
        {/* <td>
                 <Link to='' className="btn btn-success">
                   Edit
                 </Link>
               </td> */}
      </tr>
    );
  });

  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <Header />
      {/* <!-- End Header --> */}

      {/* <!-- ======= Sidebar ======= --> */}
      <Sidebar />
      {/* <!-- End Sidebar--> */}

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Reservation List</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              {/* <li className="breadcrumb-item">Reservation</li> */}
              <li className="breadcrumb-item active">Reservation List</li>
            </ol>
          </nav>
        </div>
        {/* !-- End Page Title --> */}

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  {/* <!-- Table with stripped rows --> */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">No. of Occupancy</th>
                        {/* <th scope="col">Table Type</th>
                        <th scope="col">Restaurant Id</th> */}
                        {/* <th scope="col">Edit</th> */}
                      </tr>
                    </thead>
                    <tbody>{renderList}</tbody>
                  </table>
                  {PageClick()}
                  {/* <!-- End Table with stripped rows --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <!-- ======= Footer ======= --> */}
      <Footer />

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default ListReservation;

// // {
//   "title": "qa",
//   "phone": 4323534523,
//   "opening_time": "2021-12-18 17:23:58",
//   "closing_time": "2021-12-18 17:23:58",
//   "max_table_occupancy": 10,
//   "status": 0,
//   "user_id": 2
// }
