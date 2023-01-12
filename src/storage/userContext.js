import { createContext } from "react";

//1. Crear un context
export const userContext = createContext({ user: "anonymous" });

//2 Inicializamos el Provider
function UserProvider(props) {
  const user = "Santiago";
  const logedin = true;
  function test() {
    console.log("test");
  }

  return (
    //3. Retornamos el Provider del context con un value personalizado
    <userContext.Provider value={{ user, logedin, test }}>
      {/* 4. Renderizamos los children */}
      {props.children}
    </userContext.Provider>
  );
}

export { UserProvider };
