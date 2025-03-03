import { useEffect, useState } from "react"
import "./App.css"

export const App = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled])

  return (
    <main>
      <h3>Mouse Follower</h3>
      <div className="cursor-follower" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}></div>

      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </main>
  )
}