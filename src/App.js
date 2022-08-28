import React from 'react'
import { useState } from 'react';
import Home from './pages/home';
// import TextBox from './components/text';
// import Header from './components/header'
// import Alert from './components/alert';
import './App.css';
// import About from './pages/about';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  return (

    <>

      <Home/>

    </>

    // <BrowserRouter>

    //     <Header mode={mode} title="TextUtils" toggleMode={toggleMode} modeText={modeText} />

    //     <Alert alert={alert} />

    //   <div className="container">
    //   <Routes>

    //     <Route path="/" element={<TextBox alert={showAlert} mode={mode} label="Enter Text Below" />} />

    //     <Route path="/about" element={<About />} />

    //   </Routes>

    // </div>

    // </BrowserRouter>
  )
}

export default App;
