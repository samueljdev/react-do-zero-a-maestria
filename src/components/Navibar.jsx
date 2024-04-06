import React from 'react'
import "./Navibar.css"
import { NavLink } from 'react-router-dom'

const Navibar = () => {
    return (
        <nav>
            {/* <NavLink to="/" className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")}>Home</NavLink>  removendo active cor preta*/}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
    )
}

export default Navibar