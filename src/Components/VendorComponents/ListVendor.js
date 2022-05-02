import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link } from "react-router-dom";

import axios from "axios";
import { getVendors } from "../../redux/actions/vendorAction";

import { FiEdit2 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function ListVendor() {
  const vendors = useSelector((state) => state.vendorReducer.vendors);
  const dispatch = useDispatch();

  const fetchVendors = async () => {
    const res = await axios.get(`/getvendor`).catch((err) => {
      console.log("Err", err);
    });

    dispatch(getVendors(res.data));
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  const renderList = vendors.map((vendors) => {
    const { id, name, email, phone } = vendors;
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          <Link to={`/updatevendor/${id}`}>
          <FiEdit2
              style={{
                fontSize: "1.5rem",
                marginRight: "0.5rem",
                color: "green",
              }}
            />
          </Link>
        </td>
        <td>
          <Link to="" >
          <AiFillDelete
              style={{
                fontSize: "1.5rem",
                marginRight: "0.5rem",
                color: "red",
              }}
            />
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <>
      <ToastContainer position="top-right" />

      <Header />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Vendors List</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Vendor</li>
              <li className="breadcrumb-item active">Vendor List</li>
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
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
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

export default ListVendor;