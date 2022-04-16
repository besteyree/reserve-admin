import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const CreateFloors = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("0");

  const handleChange = (e) => {
    let isChecked = e.target.checked;
    // do whatever you want with isChecked value
    setStatus("1");
  };

  const submitFloor = async (e) => {
    e.preventDefault();

    const data = {
      title,
      status,
    };

    const res = await axios.post(`/floor`, data).catch((err) => {
      console.log("Err", err);
    });

    console.log(res.data);

    setTitle('');
    document.getElementById('gridCheck1').checked = false ;

    return toast.success(res.data.message, { type: "success" });


  };

  

  return (
    <>
      <ToastContainer position="top-right" />

      {/* <!-- ======= Header ======= --> */}
      <Header />

      {/* <!-- ======= Sidebar ======= --> */}
      <Sidebar />
      {/* <!-- End Sidebar--> */}

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Create Floors</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Restaurants</li>
              <li className="breadcrumb-item active">Create Floors</li>
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
                      <label
                        for="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Title
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="Enter the Floor Title/Name"
                          value={title}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <legend className="col-form-label col-sm-2 pt-0">
                        Status
                      </legend>
                      <div class="col-sm-10">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck1"
                            name="status"
                            onChange={(e) => handleChange(e)}
                          />
                          <label className="form-check-label" for="gridCheck1">
                            0 = Shown | 1 = Hidden
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-10">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={(e) => submitFloor(e)}
                        >
                          Create Floor
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

export default CreateFloors;
