import { Route, Routes } from "react-router-dom";
import "./App.css";
import Breakfast from "./components/Breakfast/Breakfast";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
      </Routes>
    </div>
  );
}

export default App;
