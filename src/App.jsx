import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import "flag-icons/css/flag-icons.min.css";

function App() {
  const endpointKey = import.meta.env.VITE_API_KEY;
  const [films, setFilm] = useState([]);
  const [series, setSeries] = useState([]);
  const [searchterm, setSearchTerm] = useState('')
  const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${endpointKey}&query=${searchterm}`
  const endpoint_series = `https://api.themoviedb.org/3/search/tv?api_key=${endpointKey}&query=scrubs`
  useEffect(fetchFilm, [])
  function fetchFilm() {
    axios.get(endpoint).then(response => {
      setFilm(response.data.results)
    })
  }
  return (
    <>

      <input type='text' value={searchterm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Cerca il film o serie che preferisci' />
      <button onClick={fetchFilm}>Cerca</button>
      <ul>
        {films.map((film) => (
          <li>{film.title}
            <br />
            {film.original_title}
            <br />
            <span className={`fi fi-${film.original_language}`}></span>
            <br />
            {film.vote_average}</li>



        ))}
      </ul >
    </>
  )
}

export default App
