import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "./Footer";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { setRestaurants } from "../redux/actions/restaurantAction";

function ListRestaurant() {
  const restaurants = useSelector((state) => state.restaurantReducer.restaurants);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const fetchRestaurants = async () => {
    const res = await axios.get(`/restaurants`).catch((err) => {
      console.log("Err", err);
    });
    // console.log(res.data);
    dispatch(setRestaurants(res.data));
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchSingleRestaurantDetail = async (id) => {
    
    navigate(`/restaurantdetails/${id}`);
    
  }

  const renderList = restaurants.map((restaurants) => {
    const { id, title, phone, opening_time, closing_time } = restaurants;
    return (
    // <Link to='#'>
        <tr key={id} >
          <th scope="row">{id}</th>
          <td>{title}</td>
          <td>{phone}</td>
          <td>{opening_time}</td>
          <td>{closing_time}</td>
          <td>
            <div onClick={() => fetchSingleRestaurantDetail(id)} className="btn btn-primary">
              Details
            </div>
          </td>
          <td>
            <Link to={`/updaterestaurant/${id}`}className="btn btn-success">
              Edit
            </Link>
          </td>
        </tr>
      // </Link>
     
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
                        <th scope="col">Title</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Opening Time</th>
                        <th scope="col">Closing Time</th>
                        <th scope="col">Floor Details</th>
                        <th scope="col">Edit</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {renderList}
                    </tbody>
                  </table>
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
