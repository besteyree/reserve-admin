import React, { useState } from "react";
import { Link } from "react-router-dom";

function SixSeat(props) {
  const [color] = useState(props.data.status == 0 ? "#7CFC00" : "#800000");

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
    /* transform: rotate(90deg); */
  };

  const midsec = {
    overflow: "hidden",
    /* display: flex; */
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
    //   marginTop: "6.25rem",
    marginLeft: "1.5rem",
  };
  console.log(square);
  return (
    <>
      <div style={align}>
        <div style={line}></div>
        <div style={line}></div>

        <div style={midsec}>
          <div style={sideline}></div>
          <Link to={`/viewtables/${props.data.AllId}`}>
            <div style={square}>
              <h3 style={text}>{props.data.title}</h3>
            </div>
          </Link>

          <div style={sideline}></div>
        </div>

        <div style={line}></div>
        <div style={line}></div>
      </div>
    </>
  );
}

export default SixSeat;
