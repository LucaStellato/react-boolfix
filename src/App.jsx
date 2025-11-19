import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const endpointKey = import.meta.env.VITE_API_KEY;
  const [film, setFilm] = useState([]);
  const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${endpointKey}`
  function fetchFilm() {
    axios.get(endpoint).then(response => {
      setFilm(response.data)
    })
  }
  return (
    <>

    </>
  )
}

export default App
