import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navegacao, Sessao } from "./component/telaincial";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navegacao></Navegacao>
      <Sessao> </Sessao>
    </>
  );
}

export default App;
