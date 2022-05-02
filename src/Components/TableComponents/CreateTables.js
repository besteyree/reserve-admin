import React, { useEffect, useState } from "react";

import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getRestaurantsDetails,
  getlistTableTypes,
} from "../../redux/actions/restaurantAction";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const CreateTables = () => {
  const restdetails = useSelector(
    (state) => state.restaurantReducer.restaurantsdetails
  );

  const listTableDetail = useSelector(
    (state) => state.restaurantReducer.listtabletype
  );

  const id = localStorage.getItem("rest_id");

  const [floor_id, setFloorId] = useState("");
  const [type_id, setTypeId] = useState("");
  const [no_of_table, setNoOfTables] = useState("");
  const [no_of_occupany, setNoOfOccupany] = useState("");
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/get_floor`).then((res) => {
      dispatch(getRestaurantsDetails(res.data));
    });

    axios.get(`/get_table_type`).then((res) => {
      dispatch(getlistTableTypes(res.data));
    });
  }, []);

  const submitTables = async (e) => {
    e.preventDefault();

    if (title == "") {
      return toast.warning("Fill the appropriate details", { type: "warning" });
    } else if (no_of_occupany == "") {
      return toast.warning("Fill the appropriate details", { type: "warning" });
    } else if (floor_id == "") {
      return toast.warning("Fill the appropriate details", { type: "warning" });
    } else if (type_id == "") {
      return toast.warning("Fill the appropriate details", { type: "warning" });
    } else if (no_of_table == "") {
      return toast.warning("Fill the appropriate details", { type: "warning" });
    } else {
    }

    const data = {
      title,
      no_of_occupany,
      type_id,
      floor_id,
      no_of_table,
    };
    const res = await axios.post(`/tablegenerrate`, data).catch((err) => {
      console.log("Err", err);
    });

   
    navigate("/listtable");
    return toast.success(res.data.message, { type: "success" });
    
  };

  return (
    <>
      <ToastContainer position="top-right" />

      <Header />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Create Tables</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Tables</li>
              <li className="breadcrumb-item active">Create Tables</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"></h5>

                  <form id="RESTAURANT_FORM" encType="multipart/form-data">
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">
                        Select Floor
                      </label>
                      <div className="col-sm-10">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="floor_id"
                          onChange={(e) => setFloorId(e.target.value)}
                          value={floor_id}
                        >
                          <option>Select Floor</option>
                          {restdetails?.data?.map((item) => {
                            return (
                              <option value={item.id} key={item.id}>
                                {item.title}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">
                        Select Table Type
                      </label>
                      <div className="col-sm-10">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="type_id "
                          onChange={(e) => setTypeId(e.target.value)}
                          value={type_id}
                        >
                          <option>Select Table Type</option>
                          {listTableDetail?.data?.map((item) => {
                            return (
                              <option value={item.id} key={item.id}>
                                {item.title}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        for="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Total Number of Tables
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          name="no_of_table"
                          onChange={(e) => setNoOfTables(e.target.value)}
                          value={no_of_table}
                          placeholder="Total No. of Tables"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        for="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Table Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          placeholder="Eg. X, Table, Y"
                          onChange={(e) => setTitle(e.target.value)}
                          value={title}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        for="inputTime"
                        className="col-sm-2 col-form-label"
                      >
                        Number of Occupancy
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          name="no_of_occupany"
                          onChange={(e) => setNoOfOccupany(e.target.value)}
                          value={no_of_occupany}
                          placeholder="No. of Seats"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-10">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={(e) => submitTables(e)}
                        >
                          Create Table
                        </button>
                      </div>
                    </div>
                  </form>
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
};

export default CreateTables;
