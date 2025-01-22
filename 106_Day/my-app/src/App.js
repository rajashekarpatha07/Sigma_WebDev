import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { useState } from 'react';
function App() {
  const [value, setvalue] = useState(0)
  return (
    <div className="App">
        <div className="navbar">
        <NavBar/>
        </div>
        <div className="value">
          {value}
          <button onClick={()=>{
            setvalue(value+1);
          }}>click me</button>
        </div>
    </div>
  );
}

export default App;
