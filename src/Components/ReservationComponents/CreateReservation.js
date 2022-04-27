import React, { useState } from "react";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const CreateReservation = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [no_of_occupancy, setNoOfOcuupancy] = useState("");

  const createReservation = async (e) => {
    e.preventDefault();

    const data = {
      name,
      phone,
      date,
      time,
      no_of_occupancy,
    };

    const res = await axios.post(`/restaurants/filled-reservation`, data).catch((err) => {
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
          <h1>Create Reservation</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Reservation</li>
              <li className="breadcrumb-item active">Create Reservation</li>
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
                        Date
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="date"
                            onChange={(e) => setDate(e.target.value)}
                          placeholder="Enter the Date"
                            value={date}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        for="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Time
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="time"
                            onChange={(e) => setTime(e.target.value)}
                          placeholder="Enter the Time"
                            value={time}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        for="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        No of Ocuupancy
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="no_of_occupancy"
                            onChange={(e) => setNoOfOcuupancy(e.target.value)}
                          placeholder="Enter the No of Ocuupancy"
                            value={no_of_occupancy}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-10">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={(e) => createReservation(e)}
                        >
                          Create Reservation
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