import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './Components/Appbar'
//import Home from './components/Home';
//import About from './components/About';
//import Contact from './components/Contact';

function App() {
    return (
        //<Router>
        //    <Routes>
        //    {/*    <Route path="/Home" element={<Home />} />*/}
        //    {/*    <Route path="/about" element={<About />} />*/}
        //    {/*    <Route path="/contact" element={<Contact />} />*/}
        //    </Routes>
        //</Router>
        <div>
            <AppBar/>


            <p>Hejsan och v�lkommen</p>

        </div>
    );
}

export default App;
