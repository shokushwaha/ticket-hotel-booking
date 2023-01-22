import React from 'react'
import { NavLink } from 'react-router-dom'
import "../CSS/Navbar.css"
export default function Navbar() {
    return (
        <>
            <nav >
                <div className="navi"><NavLink to="/">Home</NavLink></div>
                <div className="navi"><NavLink to="/hotel">Hotels</NavLink></div>
                <div className="navi"><NavLink to="/train">Trains</NavLink></div>
                <div className="navi"><NavLink to="/flight">Flights</NavLink></div>
            </nav>
        </>
    )
}
