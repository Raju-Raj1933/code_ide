import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./screens/Home";
import Playground from "./screens/Playground";
import Error404 from "./screens/Error404";
import { GlobalStyle } from "./style/global";
import LeftComponent from "./screens/Home/LeftComponent";
import RightComponent from "./screens/Home/RightComponent";

function App() {
  return (

    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="Playground" element ={<Playground />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
