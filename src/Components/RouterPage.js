import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import CreateRestaurant from "./CreateRestaurant";
import CreateVendor from "./CreateVendor";
import ListRestaurant from "./ListRestaurant";
import ListReservation from "./ListReservation";
import ListVendor from "./ListVendor";
import Login from "./Login";
import MainContent from "./MainContent";
import React, { useState } from "react";
import UpdateRestaurant from "./UpdateRestaurant";
import RestaurantOnDetail from "./RestaurantOnDetail";
import CreateFloors from "./CreateFloors";
import UpdateFloors from "./UpdateFloors";
import ListTableTypes from "./ListTableTypes";
import CreateTableTypes from "./CreateTableTypes";
import UpdateTableTypes from "./UpdateTableTypes";
import CreateTables from "./CreateTables";
import ListTables from "./ListTables";
import PrivateRoute from "./PrivateRoute";
import CheckLoginRoute from "./CheckLoginRoute";

function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
        

          <Route exact path="/home" element={<PrivateRoute />}>
            <Route path="/home" element={<MainContent />} />
          </Route>

          <Route exact path="/createvendor" element={<PrivateRoute />}>
            <Route path="/createvendor" element={<CreateVendor />} />
          </Route>

          <Route exact path="/createrestaurant" element={<PrivateRoute />}>
            <Route path="/createrestaurant" element={<CreateRestaurant />} />
          </Route>

          <Route exact path="/listvendor" element={<PrivateRoute />}>
            <Route path="/listvendor" element={<ListVendor />} />
          </Route>

          <Route exact path="/listrestaurant" element={<PrivateRoute />}>
            <Route path="/listrestaurant" element={<ListRestaurant />} />
          </Route>

          <Route exact path="/listreservation" element={<PrivateRoute />}>
            <Route path="/listreservation" element={<ListReservation />} />
          </Route>

          <Route exact path="/updaterestaurant/:id" element={<PrivateRoute />}>
            <Route
              path="/updaterestaurant/:id"
              element={<UpdateRestaurant />}
            />
          </Route>

          <Route exact path="/updatefloors/:id" element={<PrivateRoute />}>
            <Route path="/updatefloors/:id" element={<UpdateFloors />} />
          </Route>

          <Route exact path="/restaurantdetails" element={<PrivateRoute />}>
            <Route path="/restaurantdetails" element={<RestaurantOnDetail />} />
          </Route>

          <Route exact path="/createrestaurantfloor" element={<PrivateRoute />}>
            <Route path="/createrestaurantfloor" element={<CreateFloors />} />
          </Route>

          <Route exact path="/createtabletype" element={<PrivateRoute />}>
            <Route path="/createtabletype" element={<CreateTableTypes />} />
          </Route>

          <Route exact path="/updatetabletypes/:id" element={<PrivateRoute />}>
            <Route
              path="/updatetabletypes/:id"
              element={<UpdateTableTypes />}
            />
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

          <Route exact path="/" element={<CheckLoginRoute />}>
          <Route path="/" element={<Login />} />
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default RouterPage;
