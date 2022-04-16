import React, { useEffect, useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantsDetails, getlistTableTypes } from "../redux/actions/restaurantAction";


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

  useEffect(() => {
    axios.get(`/floor/${id}`).then((res) => {
      dispatch(getRestaurantsDetails(res.data));
    });

    axios.get(`/table-types/${id}`).then((res) => {
        dispatch(getlistTableTypes(res.data));
    })

  }, []);

  const submitTables = async (e) => {
    e.preventDefault();
    const data = {
        title, no_of_occupany, type_id, floor_id, no_of_table
    }
    console.log(data);
    const res = await axios.post(`/tablegenerrate`, data).catch((err) => {
      console.log("Err", err);
    });
    // dispatch(setRestaurants(res.data));
    console.log(res.data);
  }

  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <Header />

      {/* <!-- ======= Sidebar ======= --> */}
      <Sidebar />
      {/* <!-- End Sidebar--> */}

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
        {/* <!-- End Page Title --> */}

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"></h5>

                  {/* <!-- General Form Elements --> */}
                  {/* onSubmit={submitRestaurant} */}

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
                          {
                      restdetails.map((item) => {
                        return (
                          <option value={item.id} key={item.id}>{item.title}</option>
                        )
                      })
                    }
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
                          {
                      listTableDetail.map((item) => {
                        return (
                          <option value={item.id} key={item.id}>{item.title}</option>
                        )
                      })
                    }
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
                  {/* <!-- End General Form Elements --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <!-- End #main --> */}

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

export default CreateTables;
