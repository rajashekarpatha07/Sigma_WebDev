import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [value, setvalue] = useState(0)
  return (
    
    <div className="App">
      <NavBar/>
      <div className="value">{value}</div>
      <button onClick={()=>{setvalue(value+1)}}>Click me</button>
    </div>
  );
};

export default App;
