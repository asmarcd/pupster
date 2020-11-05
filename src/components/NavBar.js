import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Pupster</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/About" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Discover" className={location.pathname === "/Discover" ? "nav-link active" : "nav-link"}>Discover</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Search" className={location.pathname === "/Search" ? "nav-link active" : "nav-link"}>Search</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;