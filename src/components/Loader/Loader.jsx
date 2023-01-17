import React from "react";
import "./loader.css";
import { DotSpinner } from "@uiball/loaders";

function Loader(props) {
  /*  return <div class="lds-dual-ring"></div>; */
  return <DotSpinner size={80} speed={1.4} color="purple" {...props} />;
}

export default Loader;
