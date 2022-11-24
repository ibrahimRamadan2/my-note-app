import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import SingleNote from "./Pages/SingleNote";
import Create from "./Pages/Create";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>  
        <Route path="/note/:noteId"  element={<SingleNote/>}/>  
        <Route path="/note/create/"  element={<Create/>}/>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
