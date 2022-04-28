import React, { useEffect } from "react";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getlistTable } from "../../redux/actions/restaurantAction";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Pagination from "react-js-pagination";

const ListTables = () => {
  const TableDetail = useSelector((state) => state.restaurantReducer.listtable);

  const dispatch = useDispatch();

  const fetchTableDetails = async (pageNumber = 1) => {
    const res = await axios
      .get(`/group_table?page=${pageNumber}`)
      .catch((err) => {
        console.log("Err", err);
      });

      // console.log(res.data)
    dispatch(getlistTable(res.data));
  };

  useEffect(() => {
    fetchTableDetails();
  }, []);


  const PageClick = () => {
    const { current_page, per_page, total, to } = TableDetail;

    return (
      <>
        <Pagination
          activePage={current_page}
          itemsCountPerPage={per_page}
          totalItemsCount={total}
          onChange={handlePageClick}
          pageRangeDisplayed={10}
          itemClass="page-item"
          linkClass="page-link"
          firstPageText="First Page"
          lastPageText="Last Lage"
        />
      </>
    );
  };

  const handlePageClick = (data) => {
    fetchTableDetails(data);
  };

  const renderList = TableDetail?.data?.map((TableDetail) => {
    const { AllId, value, no_of_occupany } = TableDetail;
    return (
      <tr key={AllId}>
        <td>{AllId}</td>
        <td>{value}</td>
        <td>{no_of_occupany}</td>
        <td>
          <Link to={`/viewtables/${AllId}`} className="btn btn-primary">
            View Tables
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
          <h1>Table Details</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Table</li>
              <li className="breadcrumb-item active">Table Details</li>
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
                        <th scope="col">Table Name</th>
                        <th scope="col">No. of Ocuupancy</th>
                        <th scope="col">View tables</th>
                      </tr>
                    </thead>
                    <tbody>{renderList}</tbody>
                  </table>
                  {PageClick()}
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

export default ListTables;