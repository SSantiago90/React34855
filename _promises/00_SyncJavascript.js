/* -------------- BACK-END -------------- */
function BackendFunction() {
  console.log("Connecting to backend...⌛");
  return "ok!";
}

/* -------------- FRONT-END (nuestra App de React) -------------- */
console.log("App iniciada.▶");

let respuestaBackend = BackendFunction();

console.log(`Respuesta: ${respuestaBackend}`);

console.log("Llegamos al final🛑.");
