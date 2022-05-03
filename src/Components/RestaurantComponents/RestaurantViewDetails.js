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
      <div style={{ marginTop: "90px", marginLeft: "20px"  }}>
        <Link to={`/createvendor/${id}`} style={{ color: "white" }}>
          <button type="submit" className="btn btn-primary">
            Add Employee
          </button>
        </Link>
      </div>
      <ListFloors />

      <ListTableTypes />
    </>
  );
}

export default RestaurantViewDetails;
