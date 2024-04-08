import React from 'react'
import "./About.css"
import ChangeCounter from '../components/ChangeCounter'
import { UseCounterContext } from '../hooks/UseCounterContext'
import { UseTitleColorContext } from '../hooks/UseTitleColorContext'

const About = () => {
    const { counter } = UseCounterContext()
    const { color, dispatch } = UseTitleColorContext()

    const setTitleColor = (color) => {
        dispatch({ type: color })
    }

    return (
        <div>
            <h1 style={{ color: color }}>About</h1>
            <div>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button> &nbsp;&nbsp;
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
            </div>
            <hr />
            <h3>Contador do Context API</h3>
            <p>Valor do contador: {counter}</p>
            <ChangeCounter />
            <hr />
        </div>
    )
}

export default About