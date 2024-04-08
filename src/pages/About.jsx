import React from 'react'
import "./About.css"
import ChangeCounter from '../components/ChangeCounter'
import { UseCounterContext } from '../hooks/UseCounterContext'
import { UseTitleColorContext } from '../hooks/UseTitleColorContext'

const About = () => {
    const { counter } = UseCounterContext()
    const { color } = UseTitleColorContext()

    return (
        <div>
            <h1 style={{ color: color }}>About</h1>
            <hr />
            <h3>Contador do Context API</h3>
            <p>Valor do contador: {counter}</p>
            <ChangeCounter />
            <hr />
        </div>
    )
}

export default About