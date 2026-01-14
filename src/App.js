import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage.js";
import { GlobalStyle } from "./GloabalStyle";


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
