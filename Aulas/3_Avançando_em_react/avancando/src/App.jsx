import './App.css';
// 2 - importando imagem no assets
import img2 from './assets/city.jpg';

// 3 - useState
import Data from './components/Data';

// 4 - renderizando lista
import ListRender from './components/ListRender';

// 8 - props
import ShowUserName from './components/ShowUserName';

// 7 - render condicional
import ConditionalRender from './components/ConditionalRender';

// 9 - importando o componente
import CarDetails from './components/CarDetails';

// 11 - renderização de listas com componentes
const cars = [
  {id: 1, brand: 'Toyota', color: 'Red', km: 10000},
  {id: 2, brand: 'Ford', color: 'Blue', km: 20000},
  {id: 3, brand: 'Fiat', color: 'Yellow', km: 30000},
];
// 12 - fragment
import Fragment from './components/fragment';

// 13 - children
import Container from './components/Container';

// 14 - funcao em prop
import ExecuteFunction from './components/ExecuteFunction';

// 15 - state lift
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';

function App() {
  // 14 - funcao em prop
  function showMassage() {
    alert('Função executada');
  }

  // 15 - state lift
  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };
  
  return (
    <div className='app'style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/*1 - imagem em public */}
      <img src="/img1.jpg" alt="Imagem um" />
      <img src={img2} alt="Imagem dois" />
      {/* 3 - useState */}
      <Data />
      {/* 4 - renderizando lista */}
      <ListRender />
      {/* 7 - render condicional */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="Beto" />
      {/* 9 - desestruturando props */}
      <CarDetails brand="Ford" km= {10000} color="Vermelho" />
      {/* 10 - reaproveitando o componente */}
      <CarDetails brand="Fiat" km= {40000} color="Verde" />
      <CarDetails km= {8000} color="Branco" brand="Audi"/>
      {/* 11 - renderização de listas com componentes */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />        
      ))}
      {/* 12 - fragment */}
      <Fragment />
      {/* 13 - children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <div>
          <h2>Teste</h2>
          <p>Testando</p>
        </div>
      </Container>
      {/* 14 - funcao em prop */}
      <ExecuteFunction myFunction={showMassage} />
      {/* 15 - state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;
