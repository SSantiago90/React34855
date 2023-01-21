import "./flex.css";

function Flex(props) {
  return (
    <div
      style={{ flexDirection: props.column ? "column" : "row" }}
      className="flexContainer"
    >
      {props.children}
    </div>
  );
}

export default Flex;
