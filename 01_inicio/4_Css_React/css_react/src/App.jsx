import './App.css'

// 2 - css de Componente
import MyComponents from './Components/MyComponents'
import Title from './Components/Title'

function App() {

  // 4 - css inline dinamico
  const n = 15

  // 5 - classes dinamicas
  const redTitle = true

  return (
    <div className='App'>
      {/* 1 - css global */}
      <h1>CSS no React</h1>

      {/* 2 - css de Componente */}
      <MyComponents />
      <p>Pegou o css do componente</p>
      {/* 3 - inline style */}
      <p style={{ color: "blue", padding: "25px", borderTop: "1px dotted blue" }}>Este elemento tem estilos inline</p>
      {/* 4 - inline style dinamico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
        css dinamico
      </h2>
      <h2 style={n > 20 ? { color: "purple" } : { color: "magenta" }}>
        css dinamico 2
      </h2>
      {/* 5 - classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter uma classe
      </h2>
      {/* 6 - css modules */}
      <Title />
    </div>
  )
}

export default App;
