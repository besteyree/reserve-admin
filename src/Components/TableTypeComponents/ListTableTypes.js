import React, { useEffect } from "react";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getlistTableTypes } from "../../redux/actions/restaurantAction";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import { FiEdit2 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const ListTableTypes = () => {
  const listTableDetail = useSelector(
    (state) => state.restaurantReducer.listtabletype
  );

  const dispatch = useDispatch();

  let { id } = useParams();

  const fetchTableDetails = async (id) => {
    let res = 0;
    if (id) {
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

  const tabletypedelete = async (e, id) => {
    e.preventDefault();

    const thisClick = e.currentTarget;
    thisClick.innerText = "Deleting";

    const res = await axios.get(`/table-types_delete/${id}`).catch((err) => {
      console.log("Err", err);
    });

    thisClick.closest("tr").remove();
    // window.location.reload(false);
    return toast.warning(res.data.message, { type: "warning" });
  };

  useEffect(() => {
    fetchTableDetails(id);
  }, []);

  const renderList = listTableDetail?.data?.map((listTableDetail) => {
    const { id, title, status } = listTableDetail;
    return (
      <tr key={id}>
        <td>{title}</td>
        <td>{status}</td>

        <td>
          <Link to={`/updatetabletypes/${id}`}>
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
          <div onClick={(e) => tabletypedelete(e, id)}>
            <AiFillDelete
              style={{
                fontSize: "1.5rem",
                marginRight: "0.5rem",
                color: "red",
              }}
            />
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

          {localStorage.getItem("user-type") == 1 ? (
            <></>
          ) : (
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">Table Type</li>
                <li className="breadcrumb-item active">Table Type Details</li>
              </ol>
            </nav>
          )}

          <Link to={`/createtabletype/${id}`}>
            <button type="submit" className="btn btn-primary">
              Add Table Type
            </button>
          </Link>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <table className="table datatable">
                    <thead>
                      <tr>
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
