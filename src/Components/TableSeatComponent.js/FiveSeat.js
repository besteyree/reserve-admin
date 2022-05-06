import React, { useState } from "react";
import { Link } from "react-router-dom";

const FiveSeat = (props) => {
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

  const square = {
    marginTop: "0.6rem",
    float: "left",
    display: "flex",
    width: "15rem",
    height: "6.25rem",
    backgroundColor: color,
    borderRadius: "10px",
  };

  const text = {
    margin: "auto",
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
        <div style={line}></div>

        <div style={midsec}>
          <div style={sideline}></div>
          <Link
            to={`/viewtables/${props.data.AllId}`}
            style={{ textDecoration: "none" }}
          >
            <div style={square}>
              <h3 style={text}>{props.data.title}</h3>
            </div>
          </Link>
        </div>
        <div style={line}></div>
        <div style={line}></div>
      </div>
    </>
  );
};

export default FiveSeat;
