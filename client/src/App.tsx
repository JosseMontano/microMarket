import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Map from "./page/map";
import Company from "./page/company";

export const navigatesData = ["/map", "/company"];

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<p>bienvenido</p>} />
        <Route path={navigatesData[0]} element={<Map />} />
        <Route path={navigatesData[1] + "/:idCompany"} element={<Company />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
