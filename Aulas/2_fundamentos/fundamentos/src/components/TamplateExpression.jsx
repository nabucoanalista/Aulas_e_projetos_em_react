// Tamplate Expression é uma forma de interpolar valores dentro de uma string no JSX. para isso, usamos chaves {} e tudo que estiver dentro das chaves será interpretado como JavaScript. exemplo: <h2>{1 + 1}</h2> resultará em 2. para criar a estrutura base digita rfce e pressione a tecla tab.

// 4 - TamplateExpression.jsx

function TamplateExpression() {
    const name = 'Pedro'

    const data = {
        age: 20,
        city: 'São Paulo',
    };

  return (
    <div>
        <p>A soma é: {2 + 2}</p>
        <p>A multiplicação é: {2 * 2}</p>
        <p>A divisão é: {10 / 2}</p>
        <p>O resto da divisão é: {10 % 3}</p>
        <p>O resultado da expressão é: {(2 + 2) * 2}</p>
        <h3>Seus resultados: {name}</h3>
        <p>Sua idade é: {data.age}</p>
        <p>Você mora em: {data.city}</p>
    </div>
  )
}

export default TamplateExpression