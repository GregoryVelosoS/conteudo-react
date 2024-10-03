import React from 'react'

const Destructuring = ({time, estado, posicao,campeao}) => {
  return (
    <div>
        <hr></hr>
        <h2>O melhor time é: {time}</h2>
        <h2>Fica no estado: {estado}</h2>
        <h2>E a posição dele no meu coração é: {posicao} °</h2>
        {campeao && <h1>Este time é campeão e vencedor</h1>}
    </div>
  )
}

export default Destructuring