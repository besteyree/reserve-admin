import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getlistSms } from "../../redux/actions/restaurantAction";

const SmsList = () => {
  const smsdetails = useSelector((state) => state.restaurantReducer.listsms);

  const dispatch = useDispatch();

  let { id } = useParams();

  const fetchSMS = async (id) => {
    const res = await axios.get(`/sms_messages/${id}`).catch((err) => {
      console.log("Err", err);
    });
    dispatch(getlistSms(res.data));
  };

  useEffect(() => {
    fetchSMS(id);
  }, []);

  console.log(smsdetails);

  const renderList = smsdetails?.map((smsdetails) => {
    const { id, sender, flow_id } = smsdetails;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{sender}</td>
        <td>{flow_id}</td>
      </tr>
    );
  });

  return (
    <>
      <Header />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Floor Details</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">SMS</li>
              <li className="breadcrumb-item active">SMS Details</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Sender</th>
                        <th scope="col">Flow ID</th>
                      </tr>
                    </thead>
                    <tbody>{renderList}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {localStorage.getItem("user-type") == 1 ? "" : <Footer />}

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default SmsList;
