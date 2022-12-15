import Button from "./Button/Button";

function Card(props) {
  console.log(props);

  return (
    <div>
      <h3>{props.title}</h3>
      <br />
      <img height="220px" src={props.img} alt={props.title} />
      <h3>$ {props.price}</h3>
      <small>{props.detail}</small>
      <Button padding="15px" color="purple">
        Ver más
      </Button>
      {/* Button( { text: "Hola desde props"} ) */}
    </div>
  );
}

export default Card;
