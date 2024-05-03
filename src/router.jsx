import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
