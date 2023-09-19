import React, { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [number, setNumber] = useState("");
  const [square, setSquare] = useState("");
  console.log(number)
    useEffect(() => {
        const respond = number**2;
        if (respond !== 0){
          setSquare(respond)
        }
    }, [number])

 if (number**2 === square){
  return (
    <div className="App">
      <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
      {square && <p>The square of {number} is {square}</p>}
    </div>
  );
}else{
  return (
    <div className="App">
      <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
    </div>
  );
  }
}


export default App;
