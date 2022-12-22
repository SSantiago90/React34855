/* -------------- BACK-END -------------- */
const BackendFunction = new Promise((resolve, reject) => {
  console.log("Connecting to backend...⌛");
  setTimeout(() => {
    reject("error obteniendo los datos");
  }, 3000);
});

/* -------------- FRONT-END (nuestra App de React) -------------- */
console.log("App iniciada.▶");

BackendFunction()
  .then((respuesta) => console.log("Recibimos respuesta:", respuesta))
  .catch((error) => console.log("Error:", error));

console.log("Llegamos al final🛑.");
