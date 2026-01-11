import { useState } from 'react';
import './App.css';
import Child from './Child';
function App() {
  const [count, setCount] = useState(0)
  console.log("Parent is component rendered", count);

  return (
    <>
      <div className="card">
        <Child/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
