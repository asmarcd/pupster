import React from "react";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search/index";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Route exact path = "/" component = {About} />
                <Route exact path = "/About" component = {About} />
                <Route exact path = "/Discover" component = {Discover} />
                <Route exact path = "/Search" component = {Search} />
            </div>
        </Router>
    )



}

export default App;