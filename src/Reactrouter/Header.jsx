import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/about">About</Link>
                        <Link className="nav-item nav-link" to="/blog">Blog</Link>
                        <Link className="nav-item nav-link disabled" to="services">Services</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
