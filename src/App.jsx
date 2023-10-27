import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { Products } from "./components/Products";
import { Details } from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Products />} />
        <Route path="/:id" element={<Details />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
