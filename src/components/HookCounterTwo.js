import React, { useState } from 'react'

const HookCounterTwo = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementByFive = () => {
        for(let i =0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(initialCount)}>RESET</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>INCREMENT</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>DECREMENT</button>
        <button onClick={incrementByFive}>INCREMENT BY 5</button>
    </div>
  )
}

export default HookCounterTwo