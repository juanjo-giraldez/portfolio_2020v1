import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useStateBar } from '../hooks/useStateBar';


export const NavBar = () => {

    const [state, open, reset, close] = useStateBar(false)

    return (
        <nav >
            <div >
                <Link to="/" onClick={reset}><svg className="logo" alt="logo"></svg></Link>
            </div>
            <div className="link">
                <div className={state ? "toggle" : "mobile"}>
                    <NavLink className="item" onClick={reset} exact to="/" >Home</NavLink>
                    <NavLink className="item" onClick={reset} exact to="./about" >Sobre mí</NavLink>
                    <NavLink className="item" onClick={reset} exact to="./contact" >Contacto</NavLink>
                    <NavLink className="item" onClick={reset} exact to="./skills" >Habilidades</NavLink>
                    <NavLink className="item" onClick={reset} exact to="./proyects"  >Proyectos</NavLink>
                    <div  onClick={close}  ><svg className=" close " alt="close"></svg></div>
                </div>
                <div onClick={open}><svg className="menu" alt="menu"></svg></div>
            </div>
        </nav>
    )
}

