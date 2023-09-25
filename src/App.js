import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashbaord from "./pages/Dashbaord";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Dashbaord} />
      </Routes>
      <div className="">PORTFOLIO</div>
      <div className="">PORTFOLIO</div>
      <div className="">PORTFOLIO</div>
      
    </>
  );
}

export default App;
