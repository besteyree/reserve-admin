import React, { useEffect } from "react";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getlistTable } from "../../redux/actions/restaurantAction";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Pagination from "react-js-pagination";

function ViewTable() {

  let { id } = useParams();
  console.log(id)

    const TableDetail = useSelector((state) => state.restaurantReducer.listtable);

    const dispatch = useDispatch();
  
    const fetchTableDetails = async (pageNumber = 1) => {
      const res = await axios
        .get(`/get_table/${id}?page=${pageNumber}`)
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
      const { id, title, no_of_occupany, status } = TableDetail;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{title}</td>
          <td>{no_of_occupany}</td>
          <td>{status}</td>
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
                          <th scope="col">Status</th>
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
}

export default ViewTable