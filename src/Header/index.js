import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

//Header component with button Links
const Header = () => {
    return (
        <div className="header">
            <h1>Lambda Eats</h1>
            <nav className="nav-links">
                <Link to="/"><button>Home</button></Link>
                <Link to="/pizza"><button id="form-button">Pizza?</button></Link>                
            </nav>
        </div>
    );
}
export default Header;