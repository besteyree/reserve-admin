import { Link } from "react-router-dom";
import React from "react";
import { AiFillDashboard, AiOutlineUnorderedList } from "react-icons/ai";
import { FaLevelUpAlt } from "react-icons/fa";
// import { MdOutlineCreate } from "react-icons/md";
import { RiReservedLine } from "react-icons/ri";
import { GiTable, GiRoundTable } from "react-icons/gi";

function Sidebar() {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link to="/home" className="nav-link ">
              {/* <i className="bi bi-grid"></i> */}
              <AiFillDashboard style={{fontSize: '1.5rem', marginRight: '0.5rem'}}/>
              <span>Dashboard</span>
            </Link>
          </li>


          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#floor-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <FaLevelUpAlt style={{fontSize: '1.5rem', marginRight: '0.5rem'}}/>

              <span>Floors</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="floor-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/createrestaurantfloor">
                  <i className="bi bi-circle"></i>
                  <span>Create Floors</span>
                </Link>
              </li>
              <li>
                <Link to="/restaurantdetails">
                  <i className="bi bi-circle"></i>
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
              <GiTable style={{fontSize: '1.5rem', marginRight: '0.5rem'}}/>

              <span>Table Types</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="table-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/createtabletype">
                  <i className="bi bi-circle"></i>
                  <span>Create Table Types</span>
                </Link>
              </li>
              <li>
                <Link to="/tabletypes">
                  <i className="bi bi-circle"></i>
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
              <GiTable style={{fontSize: '1.5rem', marginRight: '0.5rem'}}/>

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
                  <i className="bi bi-circle"></i>
                  <span>Create Table</span>
                </Link>
              </li>
              <li>
                <Link to="/listtable">
                  <i className="bi bi-circle"></i>
                  <span>List Tables</span>
                </Link>
              </li>
            </ul>
          </li>


          {/* <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tablet-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <GiRoundTable style={{fontSize: '1.5rem', marginRight: '0.5rem'}}/>

              <span>Table</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="tablet-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="">
                  <i className="bi bi-circle"></i>
                  <span>Create Table</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="bi bi-circle"></i>
                  <span>List Tables</span>
                </Link>
              </li>
            </ul>
          </li> */}

          {/* <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              to="#"
            >
              <i className="bi bi-shop"></i>
              <span>Vendors</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul
              id="components-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to='/createvendor'>
                  <i className="bi bi-circle"></i>
                  <span>Create Vendors</span>
                </Link>
              </li>
              <li>
                <Link to="/listvendor">
                  <i className="bi bi-circle"></i>
                  <span>List Vendors</span>
                </Link>
              </li>
            
            </ul>
          </li> */}

          {/* <li className="nav-item">
            <Link to="/createrestaurantfloor" className="nav-link collapsed">
              
              <FaLevelUpAlt style={{fontSize: '1.5rem', marginRight: '0.5rem'}}/>
              <span>Create Floors</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/restaurantdetails" className="nav-link collapsed">
              
              <AiOutlineUnorderedList style={{fontSize: '1.5rem', marginRight: '0.5rem'}}/>
              <span>List Floors</span>
            </Link>
          </li> */}

          {/* <li className="nav-item">
            <Link to="/createtabletype" className="nav-link collapsed">
        
              <MdOutlineCreate style={{fontSize: '1.5rem', marginRight: '0.5rem'}}/>

              <span>Create Table Types</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/tabletypes" className="nav-link collapsed">
             
              <AiOutlineUnorderedList style={{fontSize: '1.5rem', marginRight: '0.5rem'}}/>
              <span>List Table Types</span>
            </Link>
          </li> */}


          {/* <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-shop"></i>
              <span>Restaurants</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="forms-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/createrestaurant">
                  <i className="bi bi-circle"></i>
                  <span>Create Restaurants</span>
                </Link>
              </li>
              <li>
                <Link to="/createrestaurantfloor">
                  <i className="bi bi-circle"></i>
                  <span>Create Restaurants Floors</span>
                </Link>
              </li>
              <li>
                <Link to="/listrestaurant">
                  <i className="bi bi-circle"></i>
                  <span>List Restaurants</span>
                </Link>
              </li>
            </ul>
          </li> */}

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#reser-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              {/* <i className="bi bi-shop"></i> */}
              <RiReservedLine style={{fontSize: '1.5rem', marginRight: '0.5rem'}}/>

              <span>Reservation</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="reser-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              {/* <li>
                <Link to="/createrestaurant">
                  <i className="bi bi-circle"></i>
                  <span>Create Restaurants</span>
                </Link>
              </li> */}
              <li>
                <Link to="/listreservation">
                  <i className="bi bi-circle"></i>
                  <span>List Reservation</span>
                </Link>
              </li>
            </ul>
          </li>

          {/* <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-shop"></i>
              <span>Payment</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="tables-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="components-alerts.html">
                  <i className="bi bi-circle"></i>
                  <span>List Payments</span>
                </a>
              </li>
              <li>
                <a href="components-accordion.html">
                  <i className="bi bi-circle"></i>
                  <span>List Invoices</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-shop"></i>
              <span>Customer</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="charts-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="components-alerts.html">
                  <i className="bi bi-circle"></i>
                  <span>List Customer</span>
                </a>
              </li>
              <li>
                <a href="components-accordion.html">
                  <i className="bi bi-circle"></i>
                  <span>Bulk Function</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#icons-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-shop"></i>
              <span>Settings</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="icons-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="components-alerts.html">
                  <i className="bi bi-circle"></i>
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a href="components-accordion.html">
                  <i className="bi bi-circle"></i>
                  <span>Add Co-Admins</span>
                </a>
              </li>
            
            </ul>
          </li> */}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;

{
  /* <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-toggle="collapse"
              to="/testing"
            >
              <i className="bi bi-shop"></i>
              <span>Testing Phase</span>
             
            </Link>
            
          </li> */
}

{
  /* <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-menu-button-wide"></i>
              <span>Components</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="components-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="components-alerts.html">
                  <i className="bi bi-circle"></i>
                  <span>Alerts</span>
                </a>
              </li>
              <li>
                <a href="components-accordion.html">
                  <i className="bi bi-circle"></i>
                  <span>Accordion</span>
                </a>
              </li>
              <li>
                <a href="components-badges.html">
                  <i className="bi bi-circle"></i>
                  <span>Badges</span>
                </a>
              </li>
              <li>
                <a href="components-breadcrumbs.html">
                  <i className="bi bi-circle"></i>
                  <span>Breadcrumbs</span>
                </a>
              </li>
              <li>
                <a href="components-buttons.html">
                  <i className="bi bi-circle"></i>
                  <span>Buttons</span>
                </a>
              </li>
              <li>
                <a href="components-cards.html">
                  <i className="bi bi-circle"></i>
                  <span>Cards</span>
                </a>
              </li>
              <li>
                <a href="components-carousel.html">
                  <i className="bi bi-circle"></i>
                  <span>Carousel</span>
                </a>
              </li>
              <li>
                <a href="components-list-group.html">
                  <i className="bi bi-circle"></i>
                  <span>List group</span>
                </a>
              </li>
              <li>
                <a href="components-modal.html">
                  <i className="bi bi-circle"></i>
                  <span>Modal</span>
                </a>
              </li>
              <li>
                <a href="components-tabs.html">
                  <i className="bi bi-circle"></i>
                  <span>Tabs</span>
                </a>
              </li>
              <li>
                <a href="components-pagination.html">
                  <i className="bi bi-circle"></i>
                  <span>Pagination</span>
                </a>
              </li>
              <li>
                <a href="components-progress.html">
                  <i className="bi bi-circle"></i>
                  <span>Progress</span>
                </a>
              </li>
              <li>
                <a href="components-spinners.html">
                  <i className="bi bi-circle"></i>
                  <span>Spinners</span>
                </a>
              </li>
              <li>
                <a href="components-tooltips.html">
                  <i className="bi bi-circle"></i>
                  <span>Tooltips</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-journal-text"></i>
              <span>Forms</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="forms-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="forms-elements.html">
                  <i className="bi bi-circle"></i>
                  <span>Form Elements</span>
                </a>
              </li>
              <li>
                <a href="forms-layouts.html">
                  <i className="bi bi-circle"></i>
                  <span>Form Layouts</span>
                </a>
              </li>
              <li>
                <a href="forms-editors.html">
                  <i className="bi bi-circle"></i>
                  <span>Form Editors</span>
                </a>
              </li>
              <li>
                <a href="forms-validation.html">
                  <i className="bi bi-circle"></i>
                  <span>Form Validation</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-layout-text-window-reverse"></i>
              <span>Tables</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="tables-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="tables-general.html">
                  <i className="bi bi-circle"></i>
                  <span>General Tables</span>
                </a>
              </li>
              <li>
                <a href="tables-data.html">
                  <i className="bi bi-circle"></i>
                  <span>Data Tables</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-bar-chart"></i>
              <span>Charts</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="charts-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="charts-chartjs.html">
                  <i className="bi bi-circle"></i>
                  <span>Chart.js</span>
                </a>
              </li>
              <li>
                <a href="charts-apexcharts.html">
                  <i className="bi bi-circle"></i>
                  <span>ApexCharts</span>
                </a>
              </li>
              <li>
                <a href="charts-echarts.html">
                  <i className="bi bi-circle"></i>
                  <span>ECharts</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#icons-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-gem"></i>
              <span>Icons</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="icons-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="icons-bootstrap.html">
                  <i className="bi bi-circle"></i>
                  <span>Bootstrap Icons</span>
                </a>
              </li>
              <li>
                <a href="icons-remix.html">
                  <i className="bi bi-circle"></i>
                  <span>Remix Icons</span>
                </a>
              </li>
              <li>
                <a href="icons-boxicons.html">
                  <i className="bi bi-circle"></i>
                  <span>Boxicons</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-heading">Pages</li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
              <i className="bi bi-question-circle"></i>
              <span>F.A.Q</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
              <i className="bi bi-envelope"></i>
              <span>Contact</span>
            </a>
          </li>

          <li className="nav-item">
            <Link to="/register" className="nav-link collapsed" href="pages-register.html">
              <i className="bi bi-card-list"></i>
              <span>Register</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to='/login' className="nav-link collapsed" href="pages-login.html">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-error-404.html">
              <i className="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <i className="bi bi-file-earmark"></i>
              <span>Blank</span>
            </a>
          </li> */
}
