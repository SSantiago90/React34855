import "./button.css";

export default function Button(props) {
  // { color: "orange", text: "Hola desde props"}

  const styleButton = {
    padding: props.padding,
    backgroundColor: props.color,
  };

  return (
    <button style={styleButton} className="btn">
      {props.children}
    </button>
  );
}
