import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
    const nome = "Samuel"
    const data = {
        idade: 34,
        ocupacao: "programador"
    }

    return (
        <div>
            <h1>Componente TemplateExpressions</h1>
            <p>Meu nome é : {nome}</p>
            <p>Minha idade é : {data.idade}</p>
            <p>Minha ocupacao é : {data.ocupacao}</p>
            <p>Soma 4 + 4 = {4 + 4}</p>
            <MyComponent />
            <hr />
        </div>
    )
}

export default TemplateExpressions;