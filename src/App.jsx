import { useState } from 'react';
import './App.css';
import MemoziedExample from './MemoziedExample';
import UseCallbackParent from './UseCallbackParent';
import DebouncingExample from './DebouncingExample';
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
        {/* <UseCallbackParent /> */}

        {/* 3) Debouncing Example */}
        <DebouncingExample/>
      </div>
    </>
  )
}

export default App
