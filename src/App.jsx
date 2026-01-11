import { useState } from 'react';
import './App.css';
import MemoziedExample from './MemoziedExample';
import UseCallbackParent from './UseCallbackParent';
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="card">
        {/* 1) memo exmaple */}
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <MemoziedExample name="Anand" /> */}



        {/* 2) useCallback example */}
        <UseCallbackParent />
      </div>
    </>
  )
}

export default App
