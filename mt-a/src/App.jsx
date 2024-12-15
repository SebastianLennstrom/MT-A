import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './Components/Appbar'
import Home from './Components/Home'
import "./App.css"



function App() {
    return (
        <div className="page_body">
            <AppBar></AppBar>
            <main className="page_body--content">

               <Home></Home>   
            </main>
        </div>

    );
}

export default App;
