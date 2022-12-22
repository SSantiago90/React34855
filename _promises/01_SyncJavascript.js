/* -------------- BACK-END -------------- */
function BackendFunction() {
  console.log("Connecting to backend...⌛");

  setTimeout(() => {
    return "ok!";
  }, 3000);
}

/* -------------- FRONT-END (nuestra App de React) -------------- */
console.log("App iniciada.▶");

let respuestaBackend;
respuestaBackend = BackendFunction(); // asincronismo

console.log(`Respuesta: ${respuestaBackend}`);

console.log("Llegamos al final🛑.");
