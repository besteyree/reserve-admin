import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link, useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getlistTableTypes } from "../redux/actions/restaurantAction";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";



const ListTableTypes = () => {

    const listTableDetail = useSelector(
        (state) => state.restaurantReducer.listtabletype
      );
    
      const dispatch = useDispatch();
      // const navigate = useNavigate();

  // const id = localStorage.getItem('rest_id');


  const fetchTableDetails = async () => {
    const res = await axios.get(`/get_table_type`).catch((err) => {
      console.log("Err", err);
    });
    
    dispatch(getlistTableTypes(res.data));
    // console.log(res.data)
  };
  // console.log("1", listTableDetail)

  const tabletypedelete = async (id) => {
    const res = await axios.get(`/table-types_delete/${id}`).catch((err) => {
        console.log("Err", err);
      });
      // navigate(`/restaurantdetails/${id}`);
      
      window.location.reload(false);
      return toast.warning(res.data.message, { type: "danger", delay: '3000' });
  }

  useEffect(() => {
    fetchTableDetails();
  }, []);

  const renderList = listTableDetail?.data?.map((listTableDetail) => {
    const { id, title, status } = listTableDetail;
    return (
      // <Link to='#'>
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
      // </Link>
    );
  });

  return (
    <>
      <ToastContainer position="top-right" />

      {/* <!-- ======= Header ======= --> */}
      <Header />
      {/* <!-- End Header --> */}

      {/* <!-- ======= Sidebar ======= --> */}
      <Sidebar />
      {/* <!-- End Sidebar--> */}

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
        </div>
        {/* !-- End Page Title --> */}

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  {/* <!-- Table with stripped rows --> */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Floor Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                        {renderList}
                        </tbody>
                  </table>
                  {/* <!-- End Table with stripped rows --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <!-- ======= Footer ======= --> */}
      <Footer />

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  )
}

export default ListTableTypes