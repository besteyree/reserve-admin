import React, { Component, useEffect } from "react";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { getRestaurantsDetails } from "../../redux/actions/restaurantAction";

const ListFloors = () => {
  const restdetails = useSelector(
    (state) => state.restaurantReducer.restaurantsdetails
  );

  const dispatch = useDispatch();

  let { id } = useParams();

  const fetchDetails = async (id) => {
    let res = 0;
    if (id) {
      res = await axios.get(`/floor/${id}`).catch((err) => {
        console.log("Err", err);
      });
    } else {
      res = await axios.get(`/floor`).catch((err) => {
        console.log("Err", err);
      });
    }

    // console.log(res.data)

    dispatch(getRestaurantsDetails(res.data));
  };

  const floordelete = async (id) => {
    const res = await axios.get(`/floor_delete/${id}`).catch((err) => {
      console.log("Err", err);
    });

    window.location.reload(false);
    return toast.warning(res.data.message, { type: "warning" });
  };

  useEffect(() => {
    fetchDetails(id);
  }, []);

  const renderList = restdetails.map((restdetails) => {
    const { id, title, status } = restdetails;
    return (
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
    );
  });

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />

      <Header />

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

          <button type="submit" className="btn btn-primary">
            <Link
              to={`/createrestaurantfloor/${id}`}
              style={{ color: "white" }}
            >
              Create Floor
            </Link>
          </button>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {localStorage.getItem("user-type") == 1 ? "" : <Footer />}

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default ListFloors;
