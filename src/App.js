import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./dashboard/Dashboard";
import Login from "./Authenticate/Login";
import Home from "./home/Home";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token:null,
        };
    }

    switchTab = () => {
        this.setState({ token: sessionStorage.getItem('token')});
    }

    render() {

        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link to="/" className="navbar-brand">Home</Link> {/*Clickable links related to the Router*/}
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav ms-auto">
                                {(this.state.token != null)?<li className="navbar-item">
                                    <Link to="#" className="nav-link">Logout</Link>
                                    </li>:<li className="navbar-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <br/>
                    <Routes>
                        <Route path="/" exact element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/dashboard" element={<Dashboard  switchTab={this.switchTab}/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
