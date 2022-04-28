import React, { useEffect } from "react";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getlistTableTypes } from "../../redux/actions/restaurantAction";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const ListTableTypes = () => {
  const listTableDetail = useSelector(
    (state) => state.restaurantReducer.listtabletype
  );

  const dispatch = useDispatch();

  let { id } = useParams();


  const fetchTableDetails = async (id) => {
    let res = 0;
    if(id){
      res = await axios.get(`/get_table_type/${id}`).catch((err) => {
        console.log("Err", err);
      });
    } else {
      res = await axios.get(`/get_table_type`).catch((err) => {
        console.log("Err", err);
      });
    }

    dispatch(getlistTableTypes(res.data));
  };

  const tabletypedelete = async (id) => {
    const res = await axios.get(`/table-types_delete/${id}`).catch((err) => {
      console.log("Err", err);
    });

    window.location.reload(false);
    return toast.warning(res.data.message, { type: "danger", delay: "3000" });
  };

  useEffect(() => {
    fetchTableDetails(id);
  }, []);

  const renderList = listTableDetail?.data?.map((listTableDetail) => {
    const { id, title, status } = listTableDetail;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{status}</td>

        <td>
          <Link to={`/updatetabletypes/${id}`} className="btn btn-success">
            Edit
          </Link>
        </td>
        <td>
          <div onClick={() => tabletypedelete(id)} className="btn btn-danger">
            Delete{" "}
          </div>
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
          <h1>Table Types Details</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Table Type</li>
              <li className="breadcrumb-item active">Table Type Details</li>
            </ol>
          </nav>

          <button type="submit" className="btn btn-primary">
            <Link to={`/createtabletype/${id}`} style={{ color: "white" }}>
              Create Table Type
            </Link>
          </button>
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
                        <th scope="col">Table Type Name</th>
                        <th scope="col">Status</th>
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
};

export default ListTableTypes;
