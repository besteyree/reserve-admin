import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link } from "react-router-dom";

import axios from "axios";
import { getVendors } from "../../redux/actions/vendorAction";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function CreateRestaurant() {
  const vendors = useSelector((state) => state.vendorReducer.vendors);

  const dispatch = useDispatch();

  const clear = () => {
    setTitle("");
    setPhone("");
    setOpeningTime("");
    setClosingTime("");
    setMaxTable("");
    setStatus("");
    setUserId("");
  };

  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [opening_time, setOpeningTime] = useState("");
  const [closing_time, setClosingTime] = useState("");
  const [max_table_occupancy, setMaxTable] = useState("");
  const [status, setStatus] = useState("0");
  const [user_id, setUserId] = useState("");

  useEffect(() => {
    axios.get(`/getvendor`).then((res) => {
      dispatch(getVendors(res.data));
    });
  }, []);

  const handleChange = (e) => {
    setStatus("1");
  };

  const submitRestaurant = async (e) => {
    e.preventDefault();

    if (title == "") {
      return toast.warn("Please Fill Appropriate Data", { type: "warning" });
    } else if (phone == "") {
      return toast.warn("Please Fill Appropriate Data", { type: "warning" });
    } else if (opening_time == "") {
      return toast.warn("Please Fill Appropriate Data", { type: "warning" });
    } else if (closing_time == "") {
      return toast.warn("Please Fill Appropriate Data", { type: "warning" });
    } else if (max_table_occupancy == "") {
      return toast.warn("Please Fill Appropriate Data", { type: "warning" });
    } else if (user_id == "") {
      return toast.warn("Please Fill Appropriate Data", { type: "warning" });
    } else if (status == "") {
      return toast.warn("Please Fill Appropriate Data", { type: "warning" });
    } else {
    }

    const data = {
      title,
      phone,
      opening_time,
      closing_time,
      max_table_occupancy,
      status,
      user_id,
    };
    console.log(data);

    const res = await axios
      .post(`/getvendor_restaurant_store_update`, data)
      .catch((err) => {
        console.log("Err", err);
      });
    console.log(res.data.message);

    clear();
    return toast.success("Restaurant Created..", { type: "success" });
  };

  return (
    <>
      <ToastContainer position="top-right" />

      <Header />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Restaurants</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Restaurants</li>
              <li className="breadcrumb-item active">Add Restaurants</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <form id="RESTAURANT_FORM" encType="multipart/form-data">
                    <div className="row mb-3">
                      <label
                        htmlFor="inputText"
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
                          placeholder="Enter the Restaurant Name"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Phone Number
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          name="phone"
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                          placeholder="Enter the Phone Number"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="inputTime"
                        className="col-sm-2 col-form-label"
                      >
                        Opening Time
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="datetime-local"
                          className="form-control"
                          name="opening_time"
                          onChange={(e) => setOpeningTime(e.target.value)}
                          value={opening_time}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="inputTime"
                        className="col-sm-2 col-form-label"
                      >
                        Closing Time
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="datetime-local"
                          className="form-control"
                          name="closing_time"
                          onChange={(e) => setClosingTime(e.target.value)}
                          value={closing_time}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Max Table Occupancy
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          name="max_table_occupancy"
                          onChange={(e) => setMaxTable(e.target.value)}
                          value={max_table_occupancy}
                          placeholder="Enter the Max Occupancy of Table"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <legend className="col-form-label col-sm-2 pt-0">
                        Status
                      </legend>
                      <div className="col-sm-10">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck1"
                            name="status"
                            onChange={(e) => handleChange(e)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                          >
                            Disabled = Shown | Enable = Hidden
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">
                        Select Owner
                      </label>
                      <div className="col-sm-10">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="user_id"
                          onChange={(e) => setUserId(e.target.value)}
                          value={user_id}
                        >
                          <option>Select Vendor</option>
                          {vendors?.map((item) => {
                            return (
                              <option value={item.id} key={item.id}>
                                {item.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-10">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={(e) => submitRestaurant(e)}
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

      <Link
        to="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>
    </>
  );
}

export default CreateRestaurant;
