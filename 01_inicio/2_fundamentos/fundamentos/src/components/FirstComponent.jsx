// Importando componente. para importar um componente, basta importar o arquivo que o contém. a sintaxe é: import NomeDoComponente from 'caminhoDoComponente', para inserir o componente no JSX, basta chamar o componente como se fosse uma tag HTML. <NomeDoComponente />.

import MyComponent from "./MyComponent";

const FirstComponent = () => {

    return ( // Usamos parentesis para retornamos um único elemento JSX, só pode ter um elemento pai.
        <div>
            <MyComponent />
            <h2>Meu primeiro componente!</h2>
        </div>
    );
};

export default FirstComponent;