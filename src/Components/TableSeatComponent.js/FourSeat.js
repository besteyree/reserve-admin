import React, { useState } from "react";

import { Link } from "react-router-dom";

function FourSeat(props) {
  const [color] = useState(
    props.data.status == 0
      ? "#7CFC00"
      : props.data.status == 1
      ? "#800000"
      : "#43A6C6"
  );

  const line = {
    display: "inline-block",
    marginLeft: "2rem",
    width: "6.25rem",
    height: "0.625rem",
    backgroundColor: color,
    borderRadius: "8px",
  };

  const sideline = {
    margin: "0.625rem",
    float: "left",
    width: "0.625rem",
    height: "6.25rem",
    backgroundColor: color,
    borderRadius: "8px",
  };

  const midsec = {
    overflow: "hidden",
  };

  const circle = {
    marginTop: "0.6rem",
    float: "left",
    display: "flex",
    width: "6.25rem",
    height: "6.25rem",
    backgroundColor: color,
    borderRadius: "50%",
  };

  const text = {
    margin: "auto",
    fontSize: "20px",
    color: "white",
  };

  const align = {
    float: "left",
    marginLeft: "1.5rem",
  };

  return (
    <>
      <div style={align}>
        <div style={line}></div>
        <div style={midsec}>
          <div style={sideline}></div>
          <Link
            to={`/viewtables/${props.data.AllId}`}
            style={{ textDecoration: "none" }}
          >
            <div style={circle}>
              <h3 style={text}>{props.data.title}</h3>
            </div>
          </Link>

          <div style={sideline}></div>
        </div>

        <div style={line}></div>
      </div>
    </>
  );
}

export default FourSeat;
