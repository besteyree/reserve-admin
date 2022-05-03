import React, { useState, useEffect } from "react";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { getlistTableTypes } from "../../redux/actions/restaurantAction";

const CreateReservation = () => {
  const listTableDetail = useSelector(
    (state) => state.restaurantReducer.listtabletype
  );

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [time, setTime] = useState("");
  const [adults, setAdults] = useState("");
  const [kids, setKids] = useState("");
  const [no_of_occupancy, setNoOfOcuupancy] = useState("");
  const [table_type_id, setTableTypeId] = useState("");
  const [is_walkin, setIsWalkin] = useState("");
  const [source, setSource] = useState("");
  const [reserved_by, setReserveBy] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios.get(`/get_table_type`).then((res) => {
      dispatch(getlistTableTypes(res.data));
    });
  }, []);

  const createReservation = async (e) => {
    e.preventDefault();

    const data = {
      name,
      phone,
      date,
      time,
      no_of_occupancy,
      email,
      type,
      adults,
      kids,
      table_type_id,
      is_walkin,
    };

    const res = await axios
      .post(`/restaurants/filled-reservation`, data)
      .catch((err) => {
        console.log("Err", err);
      });

    setName("");
    setPhone("");
    setDate("");
    setTime("");
    setNoOfOcuupancy("");

    return toast.success(res.data.message, { type: "success" });
  };
  return (
    <>
      <ToastContainer position="top-right" />

      <Header />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Reservation</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Reservation</li>
              <li className="breadcrumb-item active">Add Reservation</li>
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
                        for="inputText"
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
                          placeholder="Enter the Name"
                          value={name}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        for="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Phone
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          name="phone"
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Enter the Phone Number"
                          value={phone}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        for="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter the Email Address"
                          value={email}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        for="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Date
                      </label>
                      <div className="col-sm-2">
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          onChange={(e) => setDate(e.target.value)}
                          placeholder="Enter the Date"
                          value={date}
                        />
                      </div>

                      <label
                        for="inputText"
                        className="col-sm-1 col-form-label"
                      >
                        Time
                      </label>
                      <div className="col-sm-2">
                        <input
                          type="time"
                          className="form-control"
                          name="time"
                          onChange={(e) => setTime(e.target.value)}
                          placeholder="Enter the Time"
                          value={time}
                        />
                      </div>

                      <label
                        for="inputText"
                        className="col-sm-1 col-form-label"
                      >
                        No of Ocuupancy
                      </label>
                      <div className="col-sm-2">
                        <input
                          type="text"
                          className="form-control"
                          name="no_of_occupancy"
                          onChange={(e) => setNoOfOcuupancy(e.target.value)}
                          placeholder="Enter the No of People"
                          value={no_of_occupancy}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Type</label>
                      <div className="col-sm-2">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="type"
                          onChange={(e) => setType(e.target.value)}
                          value={type}
                        >
                          <option selected="true">Select your Type</option>
                          <option value="1">Priority</option>
                          <option value="2">Waitlist</option>
                        </select>
                      </div>

                      <label
                        for="inputText"
                        className="col-sm-1 col-form-label"
                      >
                        Adults
                      </label>
                      <div className="col-sm-2">
                        <input
                          type="number"
                          className="form-control"
                          name="adults"
                          onChange={(e) => setAdults(e.target.value)}
                          placeholder="No of Adults"
                          value={adults}
                        />
                      </div>

                      <label
                        for="inputText"
                        className="col-sm-1 col-form-label"
                      >
                        Kids
                      </label>
                      <div className="col-sm-2">
                        <input
                          type="number"
                          className="form-control"
                          name="kids"
                          onChange={(e) => setKids(e.target.value)}
                          placeholder="No of Kids"
                          value={kids}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">
                        Table Type
                      </label>
                      <div className="col-sm-2">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="table_type_id"
                          onChange={(e) => setTableTypeId(e.target.value)}
                          value={table_type_id}
                        >
                          <option selected="true">
                            Select your Table Type
                          </option>

                          {listTableDetail?.data?.map((item) => {
                            return (
                              <option value={item.id}>{item.title}</option>
                            );
                          })}
                        </select>
                      </div>

                      <label
                        for="inputText"
                        className="col-sm-1 col-form-label"
                      >
                        Is Walkin
                      </label>
                      <div className="col-sm-2">
                        <input
                          type="number"
                          className="form-control"
                          name="is_walkin"
                          onChange={(e) => setIsWalkin(e.target.value)}
                          placeholder="Is Walkin"
                          value={is_walkin}
                        />
                      </div>
                    </div>

                    {/* <div className="row mb-3">
                      <label
                        for="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        No of Ocuupancy
                      </label>
                      <div className="col-sm-2">
                        <input
                          type="text"
                          className="form-control"
                          name="no_of_occupancy"
                          onChange={(e) => setNoOfOcuupancy(e.target.value)}
                          placeholder="Enter the No of Ocuupancy"
                          value={no_of_occupancy}
                        />
                      </div>
                    </div> */}

                    <div className="row mb-3">
                      <div className="col-sm-10">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={(e) => createReservation(e)}
                        >
                          Add Reservation
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
};

export default CreateReservation;
