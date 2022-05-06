import React, { useState } from "react";
import { Link } from "react-router-dom";

function TwoSeat(props) {
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

  const circle = {
    marginTop: "0.6rem",
    marginLeft: "2rem",
    marginBottom: "0.6rem",
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
    // marginTop: "6.25rem",
    marginLeft: "1.5rem",
  };

  const midsec = {
    overflow: "hidden",
    /* display: flex; */
  };

  return (
    <>
      <div style={align}>
        <div style={line}></div>
        <div style={midsec}>
          <Link
            to={`/viewtables/${props.data.AllId}`}
            style={{ textDecoration: "none" }}
          >
            <div style={circle}>
              <h3 style={text}>{props.data.title}</h3>
            </div>
          </Link>
        </div>
        <div style={line}></div>
      </div>
    </>
  );
}

export default TwoSeat;