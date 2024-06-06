import { useEffect, useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login.js";
import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "./components/firebase.js";
import Menu from "./components/Menu.js";


const App = () => {

    const [user, setUser] = useState();

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        setUser(user);
      })
    })

    const container = "container ";

    return(
      <>
      <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="login" element={
        <div className="container">
        <Login/></div>}/>
        <Route path="/" element={<div className={container}>
          {user?<Navigate to="profile"/>:<Login/>}</div>}/>
          <Route path="signup" element={<div className="container">
          <Signup/></div>}/>
          <Route path="profile" Component={Menu}/>
          <Route path="*" Component={NotFound}/>
      </Routes>
      </BrowserRouter>
      </div>
      <ToastContainer/>
      </>
    )

}

export default App