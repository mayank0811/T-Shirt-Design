import React , { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container">
                    <a href="/" className="navbar-brand text-white"><h1>T-Shirt Design</h1></a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarhere">
                    </button>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link" style={{'fontSize': '25px'}}>Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" style={{'fontSize': '25px'}}>Sign-Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" style={{'fontSize': '25px'}}>Log-In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar