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

  return (
    <button onClick={props.onClick} style={styleButton} className={styles.btn}>
      {props.children}
    </button>
  );
}
