import React, { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import axios from "axios";

import ListFloors from "../FloorComponents/ListFloors";
import ListTableTypes from "../TableTypeComponents/ListTableTypes";
function RestaurantViewDetails() {
  let { id } = useParams();

  const get = () => {
    axios.get(`/getvendor_restaurant/${id}`).then((res) => {});
  };

  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <div style={{ margin: "90px" }}>
        <button type="submit" className="btn btn-primary">
          <Link to={`/createvendor/${id}`} style={{ color: "white" }}>
            Create Employee
          </Link>
        </button>
      </div>
      <ListFloors />

      <ListTableTypes />
    </>
  );
}

export default RestaurantViewDetails;
