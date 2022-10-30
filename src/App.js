// import logo from './logo.svg';np
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import About from "./Components/About";
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route element = {<Home></Home>} path= "/" />
          <Route element = {<Projects />} path = "projects" />
          <Route element = {<About />} path = "about" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
