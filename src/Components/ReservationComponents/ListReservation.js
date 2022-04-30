import React, { useEffect, useState } from "react";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getreservation } from "../../redux/actions/reservationAction";
import Pagination from "react-js-pagination";

function ListReservation() {
  const [sortBy, setSortBy] = useState("");

  const reservation = useSelector(
    (state) => state.reservationReducer.reservation
  );
  const dispatch = useDispatch();

  useEffect(() => {
    sortByWalkinReser();
    
  }, [sortBy]);

  const PageClick = () => {
    const { current_page, per_page, total } = reservation;
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
    sortByWalkinReser(data);
  };

  const renderList = reservation?.data?.map((reservation) => {
    const { id, name, phone, email, date, time, no_of_occupancy, is_walkin } =
      reservation;
    return (
      <tr key={id}>
       
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{date}</td>
        <td>{time}</td>
        <td>{no_of_occupancy}</td>
        <td>{is_walkin == 1 ? "Walkin" : "Reservation"}</td>
      </tr>
    );
  });

  const sortByWalkinReser = async (pageNumber = 1) => {
    if (sortBy === "1") {
      const res = await axios
        .post(`/is-walking?page=${pageNumber}`)
        .catch((err) => {
          console.log("Err", err);
        });

      dispatch(getreservation(res.data));
    } else if (sortBy === "0") {
      const res = await axios
        .post(`/is-reservation?page=${pageNumber}`)
        .catch((err) => {
          console.log("Err", err);
        });

      dispatch(getreservation(res.data));
    } else {
      const res = await axios
        .get(`/getvendor_reservation?page=${pageNumber}`)
        .catch((err) => {
          console.log("Err", err);
        });

      dispatch(getreservation(res.data));
    }
  };

  return (
    <>
      <Header />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Reservation List</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Reservation List</li>
            </ol>
          </nav>
          <Link to="/createreservation">
          <button type="submit" className="btn btn-primary">
           
              Create Reservation
          </button>
          </Link>


          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">
              <b>Sort by Wakin / Reservation</b>
            </label>
            <div className="col-sm-2">
              <select
                className="form-select"
                aria-label="Default select example"
                name="sortBy"
                onChange={(e) => setSortBy(e.target.value)}
                value={sortBy}
              >
                <option value="tanay" selected="true">
                  Select Wakin / Reservation{" "}
                </option>
                <option value="1">Wakin</option>
                <option value="0">Reservation</option>
              </select>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <table className="table datatable">
                    <thead>
                      <tr>
                       
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">No. of Occupancy</th>
                        <th scope="col">Is Walkin / Reservation</th>
                      </tr>
                    </thead>
                    <tbody>{renderList}</tbody>
                  </table>
                  {PageClick()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
