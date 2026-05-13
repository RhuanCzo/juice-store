import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage.js";
import { GlobalStyle } from "./GloabalStyle";
import { useState } from "react";


function App() {
  const [carOpen, setCarOpen] = useState(false)
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setCarOpen={setCarOpen} carOpen={carOpen} />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
