import React from "react";
import "./Appbar_styles.css";
import { Link } from "react-router-dom";


function Appbar() {
    return (
        <div className="header">
            <nav className="header_nav">
                <ul className="list">
                    <li><Link to="/MT-A/">Home</Link></li>
                    <li><Link to="/MT-A/">About</Link></li> 
                    <li><Link to="/MT-A/">Contact</Link></li> 
                    <li><Link to="/MT-A/">Schema</Link></li> 
                </ul>
            </nav>
        </div>
    );
}

export default Appbar;
