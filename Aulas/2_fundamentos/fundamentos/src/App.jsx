import './App.css';
import Events from './components/Events';

import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TamplateExpression from './components/TamplateExpression';

function App() {

  return ( 
    <div className="App"> {/* className é uma propriedade do JSX que define a classe do elemento. */}
      <h1>Fundamentos de React</h1>
      <FirstComponent />
      <br />
      <h1>Calculos</h1>
      <TamplateExpression />
      <MyComponent />
      <Events />
    </div>
  )
}

export default App
// ver a aula n 493 e 494 para mais informações sobre o uso de componentes.
// fora da função, usamos // para comentar o código. dentro da função, usamos {/* */} para comentar o código.