import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link, useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { getRestaurantsDetails } from "../redux/actions/restaurantAction";

const RestaurantOnDetail = () => {
  const restdetails = useSelector(
    (state) => state.restaurantReducer.restaurantsdetails
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = localStorage.getItem('rest_id');
  // console.log(id)

  // let { id } = useParams();
  // console.log(id)

  const fetchDetails = async () => {
    const res = await axios.get(`/get_floor`).catch((err) => {
      console.log("Err", err);
    });
    dispatch(getRestaurantsDetails(res.data));
    // console.log(res.data)
  };

  const floordelete = async (id) => {
    const res = await axios.get(`/floor_delete/${id}`).catch((err) => {
      console.log("Err", err);
    });
    // navigate(`/restaurantdetails/${id}`);
    window.location.reload(false);
    return toast.warning(res.data.message, { type: "warning" });
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  // console.log('details: ', restdetails)

  const renderList = restdetails?.data?.map((restdetails) => {
    const { id, title, status } = restdetails;
    return (
      // <Link to='#'>
      <tr key={id}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{status}</td>

        <td>
          <Link to={`/updatefloors/${id}`} className="btn btn-success">
            Edit
          </Link>
        </td>
        <td>
          <div onClick={() => floordelete(id)} className="btn btn-danger">
            Delete{" "}
          </div>
        </td>
      </tr>
      // </Link>
    );
  });

  return (
    <>
    <ToastContainer position="top-right" autoClose={5000}/>
      {/* <!-- ======= Header ======= --> */}
      <Header />
      {/* <!-- End Header --> */}

      {/* <!-- ======= Sidebar ======= --> */}
      <Sidebar />
      {/* <!-- End Sidebar--> */}

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Floor Details</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Floor</li>
              <li className="breadcrumb-item active">Floor Details</li>
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
                        <th scope="col">Floor Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>{renderList}</tbody>
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
};

export default RestaurantOnDetail;
