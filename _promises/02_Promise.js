/* -------------- BACK-END -------------- */
const BackendFunction = new Promise((resolve) => {
  console.log("Connecting to backend...⌛");
  setTimeout(() => {
    resolve("ok!");
  }, 3000);
});

/* -------------- FRONT-END (nuestra App de React) -------------- */
console.log("App iniciada.▶");

BackendFunction().then((respuesta) =>
  console.log("Recibimos respuesta:", respuesta)
);

console.log("Llegamos al final🛑.");
