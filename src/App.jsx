import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Categoria from "./pages/Categoria/Categoria";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categoria/:categoria" element={<Categoria />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;