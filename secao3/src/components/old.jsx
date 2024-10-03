import Cris from './assets/cristiano.jpg'
import Component from './components/Component';
import MyComponent from './components/MyComponent';

const old = () => {
    const n = 15
    const redTitle = true
  return (
    <div>{/* Css global */}
    <h1>Um texto aqui</h1>
    
    {/* Css component */}
    <MyComponent />
    <p>Meu parágrafo global</p>

    {/* Css inline */}
    <h2 style={{color:"blue",padding:"25px",backgroundColor:"red"}}>Outro texto global</h2>

    {/* ccs com if ternario */}
    <h3 style={ n > 10 ? {color:"green",backgroundColor:"yellow"} : {color:"red",backgroundColor:"blue"}}>
      CSS dinamico 1</h3>
    <h3 style={ n < 10 ? {color:"green",backgroundColor:"yellow"} : {color:"red",backgroundColor:"blue"}}>
      CSS dinamico 2
    </h3>

    {/* Css com classe dinamica */}
    <p className={redTitle ? "red-title" : "normal-title"}>Olha esse texto incrível</p>

    {/* Css com moudules */}
    <Component />
    
    {/* Imagem na pasta pública */}
    <img src='./spfc.jpg' width={900} height={500}></img>
    
    {/* Imagem na pasta assets */}
    <img src={Cris} width={900} height={500}/></div>
  )
}

export default old