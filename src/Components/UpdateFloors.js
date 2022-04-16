import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link, useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const UpdateFloors = () => {
  let { id } = useParams();

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const get = () => {
    axios.get(`/get_floor/${id}`).then((res) => {
      // dispatch(getVendors(res.data));

      // const titledata = res.data.title;
      // const statusdata = res.data.status;

      // console.log(titledata)
      setTitle(res.data.title);

      setStatus(res.data.status);

      // if (status == '0') {
      //   document.getElementById("gridCheck1").checked = false;
      // } else {
      //   document.getElementById("gridCheck1").checked = true;
      // }
    });
  };
  // console.log(title)
  useEffect(() => {
    get();
  }, []);

  console.log(status);
  console.log(title);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    // do whatever you want with isChecked value
    // setStatus("1");
    if (isChecked) {
      setStatus("1");
    } else {
      setStatus("0");
    }
  };

  const updateFloor = async (e) => {
    e.preventDefault();

    const data = {
      title,
      status,
    };

    const res = await axios.post(`/floor/${id}`, data).catch((err) => {
      console.log("Err", err);
    });
    
    //   navigate('/restaurantdetails/:id');
    navigate(-1);
    return toast.success(res.data.message, { type: "success" });
  };
  return (
    <>
      
        {/* <!-- ======= Header ======= --> */}
        <Header />

        {/* <!-- ======= Sidebar ======= --> */}
        <Sidebar />
        {/* <!-- End Sidebar--> */}

        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Update Floors</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">Floors</li>
                <li className="breadcrumb-item active">Update Floors</li>
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
                              defaultChecked={0 == 1 ? true : false}
                            />
                            {console.log()}
                            <label
                              className="form-check-label"
                              for="gridCheck1"
                            >
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
                            onClick={(e) => updateFloor(e)}
                          >
                            Update Floor
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

export default UpdateFloors;
