import {  Home } from "./components";
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <Routes>
    <Route index element={<Home />} /> 
    </Routes>
    </div>
  )
}

export default App

