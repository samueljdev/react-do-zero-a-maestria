import React from 'react'
import styles from "./Title.module.css"

const Title = () => {
    return (
        <div>
            {/* RESTRIGINDO O CSS A NIVEL DE COMPONENTE */}
            <h1 className={styles.myTitle}>Meu Titulo</h1>
        </div>
    )
}

export default Title