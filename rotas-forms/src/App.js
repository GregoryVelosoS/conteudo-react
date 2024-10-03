import './App.css';
import Forms from './components/Forms.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Historia from './pages/Historia.jsx';
import Cadastro from './pages/Cadastro.jsx';

import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <div className="App">
      {/* <Forms name="Marcos" email="marcos@gmail.com"/> */}

    <h1>Este texto fica pra sempre em cima</h1>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/historia' element={<Historia />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
    <h1>Este texto fica pra sempre em baixo</h1>
    </div>
  );
}

export default App;
