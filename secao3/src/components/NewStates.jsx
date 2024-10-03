import { useState } from "react"

const NewStates = () => {
    let algo = 10
    console.log(algo)
    const [number, setNumber] = useState(0)
    console.log(number)
    return (
    <div>
        <p>Valor : {algo}</p>
        <button onClick={() => (algo = 20)}>Trocar</button>

        <p> Valor com State: {number}</p>
        <button onClick={() => (setNumber(number +15))}>Aumentar</button>
    </div>
  )
}

export default NewStates