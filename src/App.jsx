import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Categoria from "./pages/Categoria/Categoria";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categoria/:categoria" element={<Categoria />}></Route>
      </Routes>

      <Footer />
    </>

  );
}

export default App;