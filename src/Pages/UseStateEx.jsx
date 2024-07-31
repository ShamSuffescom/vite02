import { useState } from 'react'
import '../App.css'

function UseStateEx() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter+1);
  }

  const removeValue = () => {
    setCounter(counter-1);
  }

  return (
    <>
      <h1>useState Example</h1>
      <div className="card">
        <button onClick={() => setCounter((counter) => counter + 1)}>
          Add {counter}
        </button>
        <button onClick={() => setCounter((counter) => counter - 1)}>
          Remove {counter}
        </button>

        
        <button onClick={addValue}>
          Add (fn) {counter}
        </button>
        <button onClick={removeValue}>
          Remove (fn) {counter}
        </button>
      </div>
    </>
  )
}

export default UseStateEx
