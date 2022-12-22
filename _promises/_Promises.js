/* -------------- BACK-END -------------- */
const BackendFunction = new Promise((resolve, reject) => {
  console.log("Connecting to backend...⌛");

  let error = false;

  setTimeout(() => {
    if (error)
      reject("Usuario no autorizado");
    else
      resolve([1, 2, 4, 6]); 
  }, 1000);
});

/* -------------- FRONT-END (nuestra App de React) -------------- */
console.log("App iniciada.▶");

BackendFunction
  .then((respuesta) => {
    console.log("resolvemos...", respuesta);
  }).catch((error) => {
    console.log("rechazamos, hubo un error:", error);
  });

console.log("Llegamos al final🛑.");
