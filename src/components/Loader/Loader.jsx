import React from "react";
import "./loader.css";
import { DotSpinner } from "@uiball/loaders";

function Loader(props) {
  /*  return <div class="lds-dual-ring"></div>; */
  let styleContainer = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  };

  return (
    <div style={styleContainer}>
      <DotSpinner size={80} speed={1.4} color="purple" {...props} />
    </div>
  );
}

export default Loader;
