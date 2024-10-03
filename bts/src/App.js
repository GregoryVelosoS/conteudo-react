import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import ImgSlider from './components/ImgSlider';
import Login from './components/Login';
import MyNavBar from './components/MyNavBar';
import Cadastro from './components/Cadastro';

function App() {
  return (
    <div className="App">  
        <MyNavBar />
        <Cadastro />
        {/* <Login /> */}
        {/* <ImgSlider /> */}
    </div>
  );
}

export default App;
