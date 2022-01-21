import React, { useState } from 'react';
import './App.css';

// states are non-persistant, i.e when user leaves the page, the state goes back to the default value
// there are ways to make the state persistant
function App() {
  // This is array destructuring
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>Lets understand the concept of hooks, eh?</h1>
      <p>Everything is tough before its easy, just make it count: {count}</p>
      <button onClick = {increment}>+</button>
      <button onClick = {decrement}>-</button>
    </div>
  );
}

export default App;
