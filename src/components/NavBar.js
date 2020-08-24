import React from 'react';
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav >
            <Link to="/" >PortFolio</Link>
            <div  >
                <div >
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink exact to="./about" >Sobre mí</NavLink>
                    <NavLink exact to="./proyects" >Sobre mí</NavLink>
                </div>
            </div>
        </nav>
    )
}