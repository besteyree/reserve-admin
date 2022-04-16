import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { getVendors } from "../redux/actions/vendorAction";

function ListVendor() {

  const vendors = useSelector((state) => state.vendorReducer.vendors);
  const dispatch = useDispatch();

  const fetchVendors = async () => {
    const res = await axios.get(`/getvendor`).catch((err) => {
      console.log("Err", err);
    });
    // console.log(res.data);
    dispatch(getVendors(res.data));
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  const renderList = vendors.map((vendors) => {
    const {id, name, email, phone} = vendors;
    return (
      <tr key={id}>
        {/* <th scope="row">{id}</th> */}
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          <Link to="" className="btn btn-success">
            Edit
          </Link>
        </td>
        <td>
          <Link to="" className="btn btn-danger">
            Delete
          </Link>
        </td>
      </tr>
    )
  })

  
  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <Header />
      {/* <!-- End Header --> */}

      {/* <!-- ======= Sidebar ======= --> */}
      <Sidebar />
      {/* <!-- End Sidebar--> */}

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
                        {/* <th scope="col">Id</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
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
  );
}

export default ListVendor;
