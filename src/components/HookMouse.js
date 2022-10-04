import React, { useEffect, useState } from 'react'

const HookMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log("Mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useeffect call')
        window.addEventListener('mousemove', logMousePosition)
    })
  return (
    <div>
        X - {x} 
        <br />
        Y - {y}
    </div>
  )
}

export default HookMouse