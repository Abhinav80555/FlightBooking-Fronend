import './App.css';
import React, {useContext,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from './pages/Auth';
import Home from './pages/Home';
import { MyContext } from "./components/context";



function App() {

  const {cuser,setCuser}= useContext(MyContext);
  




useEffect(()=> {
  const clientUser=JSON.parse(localStorage.getItem('cuser'));
  setCuser(clientUser)
},[cuser]);


  return (
    <div className="App">
      
      <Routes>
      <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Auth/>} />
         
      </Routes>

    </div>

  );
}

export default App;
