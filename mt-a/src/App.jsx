import React from 'react';
import AppBar from './Components/Appbar'
import Home from './Components/Home'
import "./App.css"
import { Routes, Route } from 'react-router-dom';



function App() {
    return (

        <div className="page_body">
            <AppBar></AppBar>
            <main className="page_body--content">
                <Routes>
                    <Route path="/MT-A/" element={<Home />} />
                    {/*<Route path="/about" element={<About />} />*/}
                    {/*<Route path="/contact" element={<Contact />} />*/}
                </Routes>
            </main>
        </div>

    );
}

export default App;
