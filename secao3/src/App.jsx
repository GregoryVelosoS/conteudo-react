import "./App.css";
import Destructuring from "./components/Destructuring";

import ListRender from "./components/ListRender";
import ShowUserName from "./components/ShowUserName";
//import NewStates from './components/NewStates.jsx';

import { useState } from "react";
import Singers from "./components/Singers";

function App() {
  const nome = "Geovane";
  const [userName] = useState("Maria");

  const [cantores] = useState([
    { id: 1, name: "Taylor Swift", gender: "Pop", best: false, position: 5 },
    { id: 2, name: "Michael Jackson", gender: "Pop", best: true, position: 1 },
    {
      id: 3,
      name: "Alceu Valença",
      gender: "Forró",
      best: false,
      position: 1000,
    },
  ]);

  return (
    <div className="App">
      {/* Lista de cantores, com props e rearoveitamento de componentes, através de loop */}
      {cantores.map((cantor) => (
        <Singers
          key={cantor.id}
          name={cantor.name}
          gender={cantor.gender}
          best={cantor.best}
          position={cantor.position}
        />
      ))}
      {/* <NewStates /> */}
      <ListRender />
      {/* props */}
      <ShowUserName name={nome} />
      {/* Destructuring */}
      <Destructuring time="São Paulo" estado="SP" posicao={1} campeao={true} />
      {/* reaproveitando components */}
      <Destructuring time="Gama" estado="DF" posicao={2} campeao={false} />
      <Destructuring
        time="Vasco da Gama"
        estado="RJ"
        posicao={10}
        campeao={false}
      />
    </div>
  );
}

export default App;
