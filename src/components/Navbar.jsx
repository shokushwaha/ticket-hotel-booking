import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Navbar.css"
export default function Navbar() {
    return (
        <>
            <nav   >
                <ul>
                    <li className='first'><Link to="/flight"> <span> Flights</span></Link></li>
                    <li><Link to="/"> <span> Home</span></Link></li>
                    <li><Link to="/train"> <span> Trains</span></Link></li>
                    <li><Link to="/hotel"> <span> Hotels</span></Link></li>

                </ul>
            </nav>
        </>
    )
}
