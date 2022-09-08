
import React, {useState} from 'react'
import './App.css';


function App() {

  const [date, setDate] = useState(new Date())
  setInterval(() => tick(),1000)
  return (
    
    <div className="App">
      
      <h1 >Realtimeclock</h1>
      <hr></hr>
      <h1>{date.toLocaleTimeString()}</h1>
      
    </div>
    
  );

  function tick(){
    setDate(new Date())
 
  }


}

export default App;


