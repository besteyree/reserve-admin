import React, { useEffect, useState } from "react";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getlistTable } from "../../redux/actions/restaurantAction";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Pagination from "react-js-pagination";
import TwoSeat from "../TableSeatComponent.js/TwoSeat";
import FourSeat from "../TableSeatComponent.js/FourSeat";
import SixSeat from "../TableSeatComponent.js/SixSeat";
import EigthSeat from "../TableSeatComponent.js/EigthSeat";
import OneSeat from "../TableSeatComponent.js/OneSeat";
import ThreeSeat from "../TableSeatComponent.js/ThreeSeat";
import FiveSeat from "../TableSeatComponent.js/FiveSeat";
import SevenSeat from "../TableSeatComponent.js/SevenSeat";

const ListTables = () => {
  const TableDetail = useSelector((state) => state.restaurantReducer.listtable);

  const [check_occupany, setCheckOccupany] = useState("");

  const dispatch = useDispatch();

  const fetchTableDetails = async (pageNumber = 1) => {
    const res = await axios.get(`/group_table`).catch((err) => {
      console.log("Err", err);
    });
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

  console.log(TableDetail);
  let temp = "";
  const renderList = TableDetail?.map((TableDetail) => {
    const { AllId, no_of_occupany, FloorTitle, fid } = TableDetail;
    // console.log(TableDetail)
    return (
      <>
        {/* <div style={{ textAlign: "center" }}> */}
          {temp != fid ? (
            <>
              <div style={{ display: "none" }}>{(temp = fid)}</div>

              <div
                className="alert alert-primary alert-dismissible fade show"
                style={{ clear: "both", textAlign: "center" }}
              >
                {FloorTitle}
              </div>
              
            </>
          ) : (
            <></>
          )}
          <div key={AllId}>
            {no_of_occupany == 1 ? (
              <OneSeat data={TableDetail} />
            ) : no_of_occupany == 2 ? (
              <TwoSeat data={TableDetail} />
            ) : no_of_occupany == 3 ? (
              <ThreeSeat data={TableDetail} />
            ) : no_of_occupany == 4 ? (
              <FourSeat data={TableDetail} />
            ) : no_of_occupany == 5 ? (
              <FiveSeat data={TableDetail} />
            ) : no_of_occupany == 6 ? (
              <SixSeat data={TableDetail} />
            ) : no_of_occupany == 7 ? (
              <SevenSeat data={TableDetail} />
            ) : no_of_occupany == 8 ? (
              <EigthSeat data={TableDetail} />
            ) : (
              <>No Data Found</>
            )}
          </div>
        {/* </div> */}
      </>
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
                <div className="card-body">{renderList}</div>
                {/* {PageClick()} */}
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
