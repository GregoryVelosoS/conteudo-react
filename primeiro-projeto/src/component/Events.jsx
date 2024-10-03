
const Events = () => {
    const teste = (e) =>{
        //e = propriedades do evento
        console.log(e)
        
        console.log("Funcionou")
    }
  
    return (
    <div>
        <button onClick={teste}> Clica</button>
        <button onClick={() => console.log("Testei aqui")}>De novo</button>
    </div>
  )
}

export default Events