import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import axios from "axios";
import { logout } from "../../redux/actions/loginaction";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { RiAdminFill } from "react-icons/ri";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

import { FaLevelUpAlt } from "react-icons/fa";
import { RiReservedLine } from "react-icons/ri";
import { GiTable } from "react-icons/gi";

function Header() {
  const logininfo = useSelector((state) => state.loginReducer.logininfo);

  const id = localStorage.getItem("rest_id");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`/logout`)
      .then((res) => {
        localStorage.removeItem("auth-token");
        localStorage.removeItem("user-email");

        dispatch(logout(res.data));
        navigate("/");
        return toast(res.data.message, { type: "success" });
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };

  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <Navbar bg="transparent" expand={false}>
          <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Brand href="#" style={{ paddingLeft: "8px" }}>
              Wegsoft
            </Navbar.Brand>
            <Navbar.Offcanvas
              style={{
                visibility: "visible",
                right: "0px",
                width: "300px",
                paddingLeft: "10px",
              }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Wegsoft
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {localStorage.getItem("user-type") == 1 ? (
                    <>
                      <ul className="sidebar-nav" id="sidebar-nav">
                        <li className="nav-item">
                          <Link to="/home" className="nav-link ">
                            <i className="bi bi-grid"></i>

                            <span>Dashboard</span>
                          </Link>
                        </li>
                      </ul>

                      <li className="nav-item">
                        <a
                          className="nav-link collapsed"
                          data-bs-target="#floor-nav"
                          data-bs-toggle="collapse"
                          href="#"
                        >
                          <FaLevelUpAlt
                            style={{
                              fontSize: "1.5rem",
                              marginRight: "0.5rem",
                            }}
                          />

                          <span>Vendors</span>
                          <i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul
                          id="floor-nav"
                          className="nav-content collapse "
                          data-bs-parent="#sidebar-nav"
                        >
                          <li>
                            <Link to="/createvendor/null">
                              <span>Create Vendors</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/listvendor">
                              <span>List Vendors</span>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link collapsed"
                          data-bs-target="#table-nav"
                          data-bs-toggle="collapse"
                          href="#"
                        >
                          <GiTable
                            style={{
                              fontSize: "1.5rem",
                              marginRight: "0.5rem",
                            }}
                          />

                          <span>Restaurants</span>
                          <i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul
                          id="table-nav"
                          className="nav-content collapse "
                          data-bs-parent="#sidebar-nav"
                        >
                          <li>
                            <Link to="/createrestaurant">
                              <span>Create Restaurants</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/listrestaurant">
                              <span>List Restaurants</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </>
                  ) : (
                    <>
                      <ul className="sidebar-nav" id="sidebar-nav">
                        <li className="nav-item">
                          <Link to="/home" className="nav-link ">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                          </Link>
                        </li>
                      </ul>

                      <li className="nav-item">
                        <a
                          className="nav-link collapsed"
                          data-bs-target="#floor-nav"
                          data-bs-toggle="collapse"
                          href="#"
                        >
                          <FaLevelUpAlt
                            style={{
                              fontSize: "1.5rem",
                              marginRight: "0.5rem",
                            }}
                          />

                          <span>Floors</span>
                          <i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul
                          id="floor-nav"
                          className="nav-content collapse "
                          data-bs-parent="#sidebar-nav"
                        >
                          <li>
                            <Link to={`/createrestaurantfloor/${id}`}>
                              <span>Create Floors</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/floordetails">
                              <span>List Floors</span>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link collapsed"
                          data-bs-target="#table-nav"
                          data-bs-toggle="collapse"
                          href="#"
                        >
                          <GiTable
                            style={{
                              fontSize: "1.5rem",
                              marginRight: "0.5rem",
                            }}
                          />

                          <span>Table Types</span>
                          <i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul
                          id="table-nav"
                          className="nav-content collapse "
                          data-bs-parent="#sidebar-nav"
                        >
                          <li>
                            <Link to={`/createtabletype/${id}`}>
                              <span>Create Table Types</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/tabletypes">
                              <span>List Tables Types</span>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link collapsed"
                          data-bs-target="#tabless-nav"
                          data-bs-toggle="collapse"
                          href="#"
                        >
                          <GiTable
                            style={{
                              fontSize: "1.5rem",
                              marginRight: "0.5rem",
                            }}
                          />

                          <span>Table</span>
                          <i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul
                          id="tabless-nav"
                          className="nav-content collapse "
                          data-bs-parent="#sidebar-nav"
                        >
                          <li>
                            <Link to="/createtable">
                              <span>Create Table</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/listtable">
                              <span>List Tables</span>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link collapsed"
                          data-bs-target="#reser-nav"
                          data-bs-toggle="collapse"
                          href="#"
                        >
                          <RiReservedLine
                            style={{
                              fontSize: "1.5rem",
                              marginRight: "0.5rem",
                            }}
                          />

                          <span>Reservation</span>
                          <i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul
                          id="reser-nav"
                          className="nav-content collapse "
                          data-bs-parent="#sidebar-nav"
                        >
                          <li>
                            <Link to="/listreservation">
                              <span>List Reservation</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <RiAdminFill
                  style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {logininfo.user.name}
                </span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                    onClick={(e) => logoutSubmit(e)}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
