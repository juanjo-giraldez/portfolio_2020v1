import React from 'react';
import { Link, NavLink } from "react-router-dom";
import '../css/navbar.css';

export const NavBar = () => {
    return (
        <nav >
            <div>
            <Link to="/" >PortFolio</Link>
            </div>
            <div>
                <div >
                    <NavLink className="item"exact to="/" >Home</NavLink>
                    <NavLink className="item"exact to="./about" >Sobre mí</NavLink>
                    <NavLink className="item"exact to="./proyects" >Proyectos</NavLink>
                </div>
            </div>
        </nav>
    )
}