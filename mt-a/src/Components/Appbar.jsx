import React from "react";
import "./Appbar_styles.css";
import { Link } from "react-router-dom";


function Appbar() {
    return (
        <div className="header">
            <nav className="header_nav">
                <ul className="list">
                    <li>
                        <Link to="/MT-A/">Home</Link>
                    </li>
                    {/* Uncomment and add routes when needed */}
                    {/* <li><Link to="/about">About</Link></li> */}
                    {/* <li><Link to="/contact">Contact</Link></li> */}
                    {/* <li><Link to="/schema">Schema</Link></li> */}
                </ul>
            </nav>
        </div>
    );
}

export default Appbar;
