// A hierarquia de componentes serve para organizar o código e facilitar a manutenção. Os componentes podem ser reutilizados em diferentes partes da aplicação. podemos criar uma hierarquia com um compenente pai e vários componentes filhos.

function MyComponent() {
  return (
    <div>
        <h3>Aparecer em vários componentes</h3> {/* O componente MyComponent será inserido em vários componentes. */}
    </div>
  )
}

export default MyComponent