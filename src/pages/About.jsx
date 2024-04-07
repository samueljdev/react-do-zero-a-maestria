import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import "./About.css"
import ChangeCounter from '../components/ChangeCounter'

const About = () => {
    const { counter } = useContext(CounterContext) // alterando contexto da aplicação

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