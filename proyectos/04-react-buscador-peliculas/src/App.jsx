import { Movies } from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
import { useSearch } from "./hooks/useSearch"
import { useState } from "react";
import "./App.css"

function App() {
  const [sort, setSort] = useState(false);
  const { query, error, setQuery } = useSearch();
  const { movies, getMovies, loading } = useMovies({ query, sort });

  const onChange = (e) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    getMovies({ query: newQuery })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies()
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input onChange={onChange} value={query} type="text" placeholder="Avengers, Star wars, The matrix..." />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>

        {error && <p style={{ color: 'red' }} className="error">{error}</p>}
      </header>

      <main>
        {loading ? <p>Cargando... </p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
