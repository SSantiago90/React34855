import React from "react";
import styles from "./button.module.css";

// useEffect

export default function Button(props) {
  // React.useState() -> [ stateVar, setterStateVar ]
  const [colorState, setColorState] = React.useState("orange");

  let styleButton = {
    padding: props.padding,
    backgroundColor: colorState,
  };

  function handleClick(evt) {
    console.log("Evento click");
    //colorState = "red";
    setColorState("red");
  }

  return (
    <button onClick={handleClick} style={styleButton} className={styles.btn}>
      {props.children}
    </button>
  );
}
