import * as React from 'react';
import "./Appbar_styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Appbar() {


        
    return (
        <BrowserRouter className="header">
            <div className="header_nav">
                <Routes className="list">
                        <li>MT Athletes</li>
                        <li>Om oss</li>
                        <li>Tränare</li>
                        <li>Schema</li>
                </Routes>
            </div>

         </BrowserRouter>
    );
}
export default Appbar;