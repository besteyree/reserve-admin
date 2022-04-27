import React, { useState, useEffect } from "react";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getVendors } from "../../redux/actions/vendorAction";

const UpdateRestaurant = () => {
  const vendors = useSelector((state) => state.vendorReducer.vendors);

  let { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [opening_time, setOpeningTime] = useState("");
  const [closing_time, setClosingTime] = useState("");
  const [max_table_occupancy, setMaxTable] = useState("");
  const [status, setStatus] = useState("0");
  const [user_id, setUserId] = useState("");

  const get = () => {
    axios.get(`/getvendor_restaurant/${id}`).then((res) => {
      setTitle(res.data.title);
      setPhone(res.data.phone);
      setOpeningTime(res.data.opening_time);
      setClosingTime(res.data.closing_time);
      setMaxTable(res.data.max_table_occupancy);
      setStatus(res.data.status);
      setUserId(res.data.user_id);
    });
  };

  useEffect(() => {
    get();
    axios.get(`/getvendor`).then((res) => {
      dispatch(getVendors(res.data));
    });
  }, []);

  const handleChange = (e) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      setStatus("1");
    } else {
      setStatus("0");
    }
  };

  const updateRestaurant = async (e) => {
    e.preventDefault();

    const data = {
      title,
      phone,
      opening_time,
      closing_time,
      max_table_occupancy,
      status,
      user_id,
    };

    const res = await axios
      .post(`/getvendor_restaurant_store_update/${id}`, data)
      .catch((err) => {
        console.log("Err", err);
      });

    navigate("/listrestaurant");
  };

  return (
    <>
      <Header />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Update Restaurants</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Restaurants</li>
              <li className="breadcrumb-item active">Update Restaurants</li>
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
                        Phone Number
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          name="phone"
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        forName="inputTime"
                        className="col-sm-2 col-form-label"
                      >
                        Opening Time
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="opening_time"
                          onChange={(e) => setOpeningTime(e.target.value)}
                          value={opening_time}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        forName="inputTime"
                        className="col-sm-2 col-form-label"
                      >
                        Closing Time
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="closing_time"
                          onChange={(e) => setClosingTime(e.target.value)}
                          value={closing_time}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        forName="inputText"
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
                            checked={status == "1" ? true : false}
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
                          {vendors.map((item) => {
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
                          onClick={(e) => updateRestaurant(e)}
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
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default UpdateRestaurant;
