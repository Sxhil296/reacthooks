import React, { useEffect, useState } from 'react'

const HookEffect1 = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect- Updating document title')
        document.title = `You clicked ${count} times`
    }, [count])
  return (
    <div>
        <input type="text" name="" id=""  value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count + 1)}>ADD COUNT</button>
    </div>
  )
}

export default HookEffect1