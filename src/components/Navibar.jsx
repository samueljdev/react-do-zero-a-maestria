import React from 'react'
import "./Navibar.css"
import { Link } from 'react-router-dom'

const Navibar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link> {/* Elemento Link do react-router-dom*/}
        </nav>
    )
}

export default Navibar