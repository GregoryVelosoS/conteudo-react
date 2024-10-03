
const Singers = ({id,name,gender,best,position}) => {
  return (
    <div>
        <hr></hr>
        <h2>O artista é: {name}</h2>
        <h2>Canta o estilo {gender}</h2>
        <h2>No top da Billboard é a posição: {position}</h2>
        {best && <h1>É o melhor do seu gênero</h1>}
    </div>
  )
}

export default Singers