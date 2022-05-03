import React, { Component, useEffect } from "react";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantsDetails } from "../../redux/actions/restaurantAction";
import { FiEdit2 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const ListFloors = () => {
  const restdetails = useSelector(
    (state) => state.restaurantReducer.restaurantsdetails
  );

  const dispatch = useDispatch();

  let { id } = useParams();

  const fetchDetails = async (id) => {
    let res = 0;
    if (id) {
      res = await axios.get(`/get_floor/${id}`).catch((err) => {
        console.log("Err", err);
      });
    } else {
      res = await axios.get(`/get_floor`).catch((err) => {
        console.log("Err", err);
      });
    }

    dispatch(getRestaurantsDetails(res.data));
  };

  const floordelete = async (e, id) => {
    e.preventDefault();

    const thisClick = e.currentTarget;

    const res = await axios
      .get(`/floor_delete/${id}`)
      .then((res) => {
        thisClick.closest("tr").remove();
        return toast.warning(res.data.message, { type: "warning" });
      })
      .catch((err) => {
        console.log("Err", err);
      });

    // window.location.reload(false);
  };

  useEffect(() => {
    fetchDetails(id);
  }, []);

  const renderList = restdetails?.data?.map((restdetails) => {
    const { id, title, status } = restdetails;
    return (
      <tr key={id}>
        <td>{title}</td>
        <td>{status}</td>

        <td>
          <Link to={`/updatefloors/${id}`}>
            <FiEdit2
              style={{
                fontSize: "1.5rem",
                marginRight: "0.5rem",
                color: "green",
              }}
            />
          </Link>
        </td>
        <td>
          <Link to="" onClick={(e) => floordelete(e, id)}>
            <AiFillDelete
              style={{
                fontSize: "1.5rem",
                marginRight: "0.5rem",
                color: "red",
              }}
            />
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <>
      <ToastContainer position="top-right" />

      <Header />

    
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Floor Details</h1>
          {localStorage.getItem("user-type") == 1 ? (
            <></>
          ) : (
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">Floor</li>
                <li className="breadcrumb-item active">Floor Details</li>
              </ol>
            </nav>
          )}

          <Link to={`/createrestaurantfloor/${id}`}>
            <button type="submit" className="btn btn-primary">
              Add Floor
            </button>
          </Link>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <table className="table datatable">
                    <thead>
                      <tr>
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
