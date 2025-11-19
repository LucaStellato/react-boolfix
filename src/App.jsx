import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const endpointKey = import.meta.env.VITE_API_KEY;
  const [films, setFilm] = useState([]);
  const [searchterm, setSearchTerm] = useState([])
  const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${endpointKey}&query=${searchTerm}`
  useEffect(fetchFilm, [])
  function fetchFilm() {
    axios.get(endpoint).then(response => {
      setFilm(response.data.results)
    })
  }
  return (
    <>

      <input type='text' value={searchterm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Cerca il film che preferisci' />
      <ul>
        {films.map((film) => (
          <li>{film.original_title}</li>


        ))}
      </ul>
    </>
  )
}

export default App
