import H1s from "./H1.module.css";
import React from "react";
const H1 = (props) => {
  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
        rel="stylesheet"
      />
      <h1
        style={{ fontSize: props.fontSize, color: props.col }}
        className={`${props.className} ${H1s["h1s"]}`}
      >
        {props.children}
      </h1>
    </React.Fragment>
  );
};

export default H1;
