import "./MyComponent.css"

const MyComponent = () => {
  return (
    <div>
        <h1>Meu texto do componente</h1>
        <p>Parágrafo do componente</p>
        <p className="azul">Paragrafo do componente sem vazar</p>
    </div>
  )
}

export default MyComponent