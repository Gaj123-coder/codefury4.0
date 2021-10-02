import tt from "./title.module.css";
import React from "react";
const title = (props) => {
  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"
        rel="stylesheet"
      />

      <h3 className={`${props.clasName} ${tt["tit"]}`}>{props.children}</h3>
    </React.Fragment>
  );
};

export default title;
