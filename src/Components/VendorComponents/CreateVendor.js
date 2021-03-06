import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function CreateVendor() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [user_type, setUser_Type] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  let { id } = useParams();

  const submitVendor = async (e) => {
    e.preventDefault();

    if (name == "") {
      return toast.warning("Fill the appropriate details", { type: "warning" });
    }

    else if (email == "") {
      toast.warning("Fill the appropriate details", { type: "warning" });
    }

    else if (phone == "") {
      return toast.warning("Fill the appropriate details", { type: "warning" });
    }

    else if (password == "") {
      return toast.warning("Fill the appropriate details", { type: "warning" });
    } else {
      
    }

    const data = {
      name,
      email,
      phone,
      user_type,
      password,
    };
    console.log(data);

    const res = await axios.post(`/register/${id}`, data).catch((err) => {
      console.log("Err", err);
    });

    setName("");
    setEmail("");
    setPhone("");
    setUser_Type("");
    setPassword("");

    return toast.success(res.data.message, { type: "success" });
  };

  return (
    <>
      <ToastContainer position="top-right" />

      <Header />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Vendor</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Vendor</li>
              <li className="breadcrumb-item active">Add Vendor</li>
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
                          placeholder="Enter your Name"
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
                          placeholder="Enter your Email Address"
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
                          placeholder="Enter your Phone Number"
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

                          {id == "null" ? (
                            <option value="2">Admin</option>
                          ) : (
                            <>
                              <option value="3">Receptionist</option>
                              <option value="4">Waiter</option>{" "}
                            </>
                          )}
                        </select>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Password
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          placeholder="********"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-10">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={(e) => submitVendor(e)}
                        >
                          Add Vendor
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
}

export default CreateVendor;
