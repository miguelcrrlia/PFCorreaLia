import { useEffect, useState } from 'react'

const LoadingMessage = () => {
  const [message, setMessage] = useState("Espere por favor")
  useEffect(() => {
    let timeMark
    let i = 0
    timeMark = setInterval(() => {
      // prevMessage es un parámetro de la función dentro de setMessage, 
      // que no es más que el valor actual de message. Si pusiera setMessage(message + ".")
      // no me estaría garantizando que use el valor "actual" de message.
      setMessage(prevMessage => prevMessage + ".")
      if (i === 3) {
        i = -1
        setMessage("Espere por favor")
      }
      i++
      // Este return es para que el setInterval retorne el message
      return message
    }, 300)
    // Limpia el intervalo cuando el componente se desmonta
    // Garantiza que el setInterval deje de "andar" cuando el componente se desmonte
    return () => clearInterval(timeMark)
  }, [])
  return <h3>{message}</h3>
}
export default LoadingMessage