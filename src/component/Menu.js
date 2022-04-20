import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
            <div className="container">
                <NavLink to={`/`} className="navbar-brand">React Music player</NavLink>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={`/music`} className="nav-link">Music</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/about`} className="nav-link">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}