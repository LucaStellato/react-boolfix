import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const endpointKey = import.meta.env.VITE_API_KEY;
  const [films, setFilm] = useState([]);
  const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${endpointKey}`
  useEffect(fetchFilm, [])
  function fetchFilm() {
    axios.get(endpoint).then(response => {
      setFilm(response.data.results)
    })
  }
  return (
    <>
      <ul>
        {films.map((film) => (
          <li>{film.original_title}</li>


        ))}
      </ul>
    </>
  )
}

export default App
