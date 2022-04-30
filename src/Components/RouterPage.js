import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CreateRestaurant from "./RestaurantComponents/CreateRestaurant";
import CreateVendor from "./VendorComponents/CreateVendor";
import ListRestaurant from "./RestaurantComponents/ListRestaurant";
import ListReservation from "./ReservationComponents/ListReservation";
import ListVendor from "./VendorComponents/ListVendor";
import Login from "./UserComponents/Login";
import MainContent from "./MainContent";
import React, { useState } from "react";
import UpdateRestaurant from "./RestaurantComponents/UpdateRestaurant";
import ListFloors from "./FloorComponents/ListFloors";
import CreateFloors from "./FloorComponents/CreateFloors";
import UpdateFloors from "./FloorComponents/UpdateFloors";
import ListTableTypes from "./TableTypeComponents/ListTableTypes";
import CreateTableTypes from "./TableTypeComponents/CreateTableTypes";
import UpdateTableTypes from "./TableTypeComponents/UpdateTableTypes";
import CreateTables from "./TableComponents/CreateTables";
import ListTables from "./TableComponents/ListTables";
import PrivateRoute from "./CommonComponents/PrivateRoute";
import CheckLoginRoute from "./CommonComponents/CheckLoginRoute";
import RestaurantViewDetails from "./RestaurantComponents/RestaurantViewDetails";
import SmsList from "./RestaurantComponents/SmsList";
import AdminRoute from "./CommonComponents/AdminRoute";
import CheckBoth from "./CommonComponents/CheckBoth";
import UpdateVendor from "./VendorComponents/UpdateVendor";
import CreateSms from "./RestaurantComponents/CreateSms";
import CreateReservation from "./ReservationComponents/CreateReservation";
import ViewTable from "./TableComponents/ViewTable";
import FourSeat from "./TableSeatComponent.js/FourSeat";
import TwoSeat from "./TableSeatComponent.js/TwoSeat";
import EigthSeat from "./TableSeatComponent.js/EigthSeat";
import SixSeat from "./TableSeatComponent.js/SixSeat";

function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>

        <Route path="/eightseat" element={<SixSeat />} />


          {/* Checking Login route for both super admin admin */}
          <Route exact path="/" element={<CheckLoginRoute />}>
            <Route path="/" element={<Login />} />
          </Route>
          {/* end */}

          {/* --------------------Admin Routes----------------------- */}

          <Route exact path="/listreservation" element={<PrivateRoute />}>
            <Route path="/listreservation" element={<ListReservation />} />
          </Route>

          <Route exact path="/floordetails" element={<PrivateRoute />}>
            <Route path="/floordetails" element={<ListFloors />} />
          </Route>

          <Route exact path="/tabletypes" element={<PrivateRoute />}>
            <Route path="/tabletypes" element={<ListTableTypes />} />
          </Route>

          <Route exact path="/createtable" element={<PrivateRoute />}>
            <Route path="/createtable" element={<CreateTables />} />
          </Route>

          <Route exact path="/listtable" element={<PrivateRoute />}>
            <Route path="/listtable" element={<ListTables />} />
          </Route>

          <Route exact path="/createreservation" element={<PrivateRoute />}>
            <Route path="/createreservation" element={<CreateReservation />} />
          </Route>

          <Route exact path="/viewtables/:id" element={<PrivateRoute />}>
            <Route path="/viewtables/:id" element={<ViewTable />} />
          </Route>

          <Route exact path="/fourseat" element={<PrivateRoute />}>
            <Route path="/fourseat" element={<FourSeat />} />
          </Route>

          <Route exact path="/twoseat" element={<PrivateRoute />}>
            <Route path="/twoseat" element={<TwoSeat />} />
          </Route>

          {/* -----------------------------End--------------------------------- */}

          {/* -----------------------------------Super Admin Route------------- */}

          <Route exact path="/createvendor/:id" element={<AdminRoute />}>
            <Route path="/createvendor/:id" element={<CreateVendor />} />
          </Route>

          <Route exact path="/listvendor" element={<AdminRoute />}>
            <Route path="/listvendor" element={<ListVendor />} />
          </Route>

          <Route exact path="/viewdetails/:id" element={<AdminRoute />}>
            <Route
              path="/viewdetails/:id"
              element={<RestaurantViewDetails />}
            />
          </Route>

          <Route exact path="/smslist/:id" element={<AdminRoute />}>
            <Route path="/smslist/:id" element={<SmsList />} />
          </Route>

          <Route exact path="/listrestaurant" element={<AdminRoute />}>
            <Route path="/listrestaurant" element={<ListRestaurant />} />
          </Route>

          <Route exact path="/createrestaurant" element={<AdminRoute />}>
            <Route path="/createrestaurant" element={<CreateRestaurant />} />
          </Route>

          <Route exact path="/updaterestaurant/:id" element={<AdminRoute />}>
            <Route
              path="/updaterestaurant/:id"
              element={<UpdateRestaurant />}
            />
          </Route>

          <Route exact path="/updatevendor/:id" element={<AdminRoute />}>
            <Route path="/updatevendor/:id" element={<UpdateVendor />} />
          </Route>

          <Route exact path="/createsms/:id" element={<AdminRoute />}>
            <Route path="/createsms/:id" element={<CreateSms />} />
          </Route>

          {/* --------------------Check Both ---------------------------- */}

          <Route exact path="/home" element={<CheckBoth />}>
            <Route path="/home" element={<MainContent />} />
          </Route>

          <Route
            exact
            path="/createrestaurantfloor/:id"
            element={<CheckBoth />}
          >
            <Route
              path="/createrestaurantfloor/:id"
              element={<CreateFloors />}
            />
          </Route>

          <Route exact path="/createtabletype/:id" element={<CheckBoth />}>
            <Route path="/createtabletype/:id" element={<CreateTableTypes />} />
          </Route>

          <Route exact path="/updatefloors/:id" element={<CheckBoth />}>
            <Route path="/updatefloors/:id" element={<UpdateFloors />} />
          </Route>

          <Route exact path="/updatetabletypes/:id" element={<CheckBoth />}>
            <Route
              path="/updatetabletypes/:id"
              element={<UpdateTableTypes />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default RouterPage;