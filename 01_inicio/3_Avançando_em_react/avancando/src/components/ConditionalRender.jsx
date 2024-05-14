const ConditionalRender = () => {
  const x = true; // posso mudar o true para 5 e ver o que acontece 

  const name = 'João';

  return ( 
  <div> 
    {/* 7 - Render condicional */}
    <h3>Isso será exibido?</h3>
    {x > 2 && <p>Se x for true Sim</p>}
    {/* 8 - else */}
    <h3>Render Ternário</h3>
    {name === 'João' ?(
      <div>
        <p>Olá João!</p>
      </div>
    ) : (
      <div>
        <p>Olá estranho!</p>
      </div>
    )}
  </div>
  );
};

export default ConditionalRender;