// Evento de clik. O evento de click é um evento que ocorre quando o usuário clica em um elemento HTML. com onClick, podemos adicionar um evento de click a um elemento HTML.

const Events = () => {
  const handleClick = (e) => {
    console.log(e);
    console.log("Executou");
  };

  // 8 - Função de renderização
  const renderSomething = (x) => {
    if (x) {
        return <h1>Renderizando isso!</h1>
    } else {
        return <h1>Renderizando outra coisa!</h1>
    }
  }; 

  // return 10 > 2 && <p>Carregando...</p>;

  return (
    <div>
        <div>
            <button onClick={() => console.log("Testando um evento")}>Clique aqui</button>
        </div>
        {/* 7 - Evento com função */}
        <div>
            <button onClick={handleClick}>Clique 2</button>
        </div>
        {/* 8 - Chamando a função de renderização */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>    
  );
};

export default Events;

// Em caso de lógicas complexas, é recomendado criar uma função separada para o evento. 