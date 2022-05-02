import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setRestaurants } from "../../redux/actions/restaurantAction";
import Pagination from "react-js-pagination";

import { FiEdit2 } from "react-icons/fi";
import { MdOutlineSms } from "react-icons/md";
import { FaSms } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";


function ListRestaurant() {
  const restaurants = useSelector(
    (state) => state.restaurantReducer.restaurants
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchRestaurants = async (pageNumber = 1) => {
    const res = await axios
      .get(`/getvendor_restaurant?page=${pageNumber}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setRestaurants(res.data));
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const PageClick = () => {
    const { current_page, per_page, total } = restaurants;
    return (
      <>
        <Pagination
          activePage={current_page}
          itemsCountPerPage={per_page}
          totalItemsCount={total}
          onChange={handlePageClick}
          pageRangeDisplayed={10}
          itemClass="page-item"
          linkClass="page-link"
          firstPageText="First Page"
          lastPageText="Last Lage"
        />
      </>
    );
  };

  const handlePageClick = (data) => {
    fetchRestaurants(data);
  };

  const fetchSingleRestaurantDetail = async (id) => {
    navigate(`/viewdetails/${id}`);
  };

  const smsFetch = async (id) => {
    navigate(`/smslist/${id}`);
  };

  const createSms = (id) => {
    navigate(`/createsms/${id}`);
  };

  const renderList = restaurants?.data?.map((restaurants) => {
    const { id, title, phone, opening_time, closing_time } = restaurants;
    return (
      <tr key={id}>
       
        <td>{title}</td>
        <td>{phone}</td>
        <td>{opening_time}</td>
        <td>{closing_time}</td>
        <td>
          {restaurants?.sms.sms == 0 ? (
            <div onClick={() => createSms(id)}>
              <MdOutlineSms
              style={{
                fontSize: "1.5rem",
                marginRight: "0.5rem",
                color: "green",
              }}
            />
            </div>
          ) : (
            <div onClick={() => smsFetch(id)}>
              <FaSms
              style={{
                fontSize: "1.5rem",
                marginRight: "0.5rem",
                color: "green",
              }}/>
            </div>
          )}
        </td>
        <td>
          <div
            onClick={() => fetchSingleRestaurantDetail(id)}
          >
            <CgDetailsMore
              style={{
                fontSize: "1.5rem",
                marginRight: "0.5rem",
                color: "green",
              }}/>
          </div>
        </td>
        <td>
          <Link to={`/updaterestaurant/${id}`}>
          <FiEdit2
              style={{
                fontSize: "1.5rem",
                marginRight: "0.5rem",
                color: "green",
              }}
            />
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Header />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Restaurant List</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Restaurant</li>
              <li className="breadcrumb-item active">Restaurant List</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <table className="table datatable">
                    <thead>
                      <tr>
                      
                        <th scope="col">Title</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Opening Time</th>
                        <th scope="col">Closing Time</th>
                        <th scope="col">SMS Credentials</th>
                        <th scope="col">View Details</th>
                        <th scope="col">Edit</th>
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

export default ListRestaurant;

// // {
//   "title": "qa",
//   "phone": 4323534523,
//   "opening_time": "2021-12-18 17:23:58",
//   "closing_time": "2021-12-18 17:23:58",
//   "max_table_occupancy": 10,
//   "status": 0,
//   "user_id": 2
// }
