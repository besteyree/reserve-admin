import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function CreateVendor() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [user_type, setUser_Type] = useState("");
  const [password, setPassword] = useState("");

  let { id } = useParams();

  const submitVendor = async (e) => {
    e.preventDefault();

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

    console.log(res.data);
  };

  return (
    <>
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
                          Submit Form
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