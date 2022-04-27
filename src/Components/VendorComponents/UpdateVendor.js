import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const UpdateVendor = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [user_type, setUser_Type] = useState("");
  const [password, setPassword] = useState("");

  const get = () => {
    axios.get(`/getvendor/${id}`).then((res) => {
      setEmail(res.data[0].email);
      setName(res.data[0].name);
      setPhone(res.data[0].phone);
      setUser_Type(res.data[0].user_type);
      setPassword(res.data[0].password);
    });
  };

  useEffect(() => {
    get();
  }, []);

  const updateVen = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      user_type,
      password,
    };

    const res = await axios.post(`/vendor_update/${id}`, data).catch((err) => {
      console.log("Err", err);
    });

    navigate(-1);
    return toast.success(res.data, { type: "success" });
  };
  return (
    <>
      <ToastContainer position="top-right" />

      <Header />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Create Vendor</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Vendor</li>
              <li className="breadcrumb-item active">Create Vendor</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"></h5>

                  <form>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="inputEmail"
                        className="col-sm-2 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="inputNumber"
                        className="col-sm-2 col-form-label"
                      >
                        Phone Number
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          name="phone"
                          className="form-control"
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">
                        User Type
                      </label>
                      <div className="col-sm-10">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="user_type"
                          onChange={(e) => setUser_Type(e.target.value)}
                          value={user_type}
                        >
                          <option selected="true">Select your User Type</option>
                          <option value="2">Admin</option>
                          <option value="3">Receptionist</option>
                          <option value="4">Waiter</option>
                        </select>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-10">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={(e) => updateVen(e)}
                        >
                          Update Vendor
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
        href="/#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default UpdateVendor;
