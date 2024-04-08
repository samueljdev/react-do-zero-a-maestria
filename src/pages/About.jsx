import React from 'react'
import "./About.css"
import ChangeCounter from '../components/ChangeCounter'
import { UseCounterContext } from '../hooks/UseCounterContext'

const About = () => {
    const { counter } = UseCounterContext()

    return (
        <div>
            <h1>About</h1>
            <hr />
            <h3>Contador do Context API</h3>
            <p>Valor do contador: {counter}</p>
            <ChangeCounter />
            <hr />
        </div>
    )
}

export default About