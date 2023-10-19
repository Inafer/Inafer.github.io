import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [initialValue, setInitialValue] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <div className="input-container">
        <label>Initial Value:</label>
        <input
          type="number"
          value={initialValue}
          onChange={(e) => setInitialValue(parseInt(e.target.value, 10))}
        />
        <button onClick={() => setCount(initialValue)}>Set Count</button>
      </div>
    </div>
  );
}

export default App;
import './App.css';

