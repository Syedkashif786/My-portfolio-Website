// import logo from './logo.svg';np
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route element = {<Home></Home>} path= "home" />
          <Route element = {<Projects />} path = "projects" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
