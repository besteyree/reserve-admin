import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from 'axios'
import { getVendors } from "../redux/actions/vendorAction";
import { setRestaurants } from "../redux/actions/restaurantAction";

function CreateRestaurant() {

  const vendors = useSelector((state) => state.vendorReducer.vendors);

  // const restaurants = useSelector((state) => state.restaurantReducer.restaurants);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [opening_time, setOpeningTime] = useState("");
  const [closing_time, setClosingTime] = useState("");
  const [max_table_occupancy, setMaxTable] = useState("");
  const [status, setStatus] = useState('0');
  const [user_id, setUserId] = useState("");

  useEffect(() => {
   axios.get(`/getvendor`).then(res => {
       dispatch(getVendors(res.data));
   });
  }, []);

  const handleChange = (e) => {
    let isChecked = e.target.checked;
    // do whatever you want with isChecked value
    setStatus("1")
  }

  const submitRestaurant = async (e) => {
    e.preventDefault();

    const data = {
        title, phone, opening_time, closing_time, max_table_occupancy, status, user_id
    }
    console.log(data);

    const res = await axios.post(`/restaurant`, data).catch((err) => {
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
          <h1>Create Restaurants</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Restaurants</li>
              <li className="breadcrumb-item active">Create Restaurants</li>
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
                          
                  <form id="RESTAURANT_FORM"  encType="multipart/form-data" >
                    {/* <div className="row mb-3">
                      <label
                        for="inputNumber"
                        className="col-sm-2 col-form-label"
                      >
                        Upload Image
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                        />
                      </div>
                    </div> */}

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
                      <label
                        for="inputText"
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
                        for="inputTime"
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
                        for="inputTime"
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
                        for="inputText"
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
                          {
                            vendors.map((item) => {
                              return (
                                <option value={item.id} key={item.id}>{item.name}</option>
                              )
                            })
                          }
                        </select>
                      </div>
                    </div>

              

                    {/* <div className="row mb-3">
                      <label
                        for="inputNumber"
                        className="col-sm-2 col-form-label"
                      >
                        Phone Number
                      </label>
                      <div className="col-sm-10">
                        <input type="number" className="form-control" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        for="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Select Operating Time
                      </label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        for="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Company Address
                      </label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" />
                      </div>
                    </div> */}

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
}

export default CreateRestaurant;
