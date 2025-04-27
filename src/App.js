import {useState} from "react"
import axios from "axios"
import LoginContextProvider from "./components/Logincontext";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
function App() {


  return (
    <LoginContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  );
}

export default App;
