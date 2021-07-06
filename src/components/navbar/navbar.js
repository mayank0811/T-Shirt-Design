import React , {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container">
                    <a href="/" className="navbar-brand text-white">T-Shirt Design</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarhere">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarhere">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Sign-Up</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">Log-In</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}

export default Navbar