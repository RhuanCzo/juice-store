import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Components/Home";
import { GlobalStyle } from "./GloabalStyle";


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
