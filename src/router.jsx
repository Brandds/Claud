import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/";
import TelaPrincipal from "./pages/Principal/";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/principal"
          element={<TelaPrincipal></TelaPrincipal>}
        ></Route>
        <Route path="/linkedin"></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
