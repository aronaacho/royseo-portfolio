import React from 'react';
import { NavLink } from 'react-router-dom';

export function MobileMenu() {
    return (
        <div>
        <div className="nav-container">
            <NavLink to ="/about" className="nav-links" >ABOUT</NavLink>
            <NavLink to ="/research" className="nav-links" >RESEARCH</NavLink>
            <NavLink to ="/contact" className="nav-links" >CONTACT</NavLink>
            <NavLink to ="/cv" className="nav-links" >CV</NavLink>
        </div>
        </div>
    )
}