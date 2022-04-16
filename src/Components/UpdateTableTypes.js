import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link, useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";


const UpdateTableTypes = () => {

  let { id } = useParams();

  const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [status, setStatus] = useState("0");
  
    const handleChange = (e) => {
      let isChecked = e.target.checked;
      // do whatever you want with isChecked value
      setStatus("1");
    };

  const navigate = useNavigate();


  const get = () => {
    axios.get(`/get_table_type/${id}`).then((res) => {
      
      setTitle(res.data.title);

      setDetail(res.data.detail);

      
    });
  };

  useEffect(() => {
    get();
  }, []);


    const updateTableType = async (e) => {
      e.preventDefault();

    const data = {
        title,
        detail,
        status,
      };

      const res = await axios.post(`/table-types/${id}`, data).catch((err) => {
        console.log("Err", err);
      });
      // setTitle(res.data.title);
      // setDetail(res.data.detail);
    //   navigate('/restaurantdetails/:id');
      navigate(-1);
    return toast.success(res.data.message, { type: "success" });

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
          <h1>Update Table Types</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Tables</li>
              <li className="breadcrumb-item active">Update Table Types</li>
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
                        forName="inputText"
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
                          value={title}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        forName="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Detail
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="detail"
                          onChange={(e) => setDetail(e.target.value)}
                          value={detail}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <legend className="col-form-label col-sm-2 pt-0">
                        Status
                      </legend>
                      <div className="col-sm-10">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck1"
                            name="status"
                            onChange={(e) => handleChange(e)}
                          />
                          <label className="form-check-label" forName="gridCheck1">
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
                          onClick={(e) => updateTableType(e)}
                        >
                          Update Table Type
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
  )
}

export default UpdateTableTypes