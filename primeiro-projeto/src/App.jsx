import './App.css';
import Events from './component/Events.jsx';

import FirstComponent from './component/FirstComponent.jsx';
import MyComponent from './component/MyComponent.jsx';
import TemplateExpressions from './component/TemplateExpressions.jsx';


function App() {
  return (
    <div className="App">
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
    </div>
  );
}

export default App;
