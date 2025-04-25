function ListOfMovies({ movies }) {
    return (
        <ul className="movies">
            {
                movies.map((m) => (
                    <li key={m.id}>
                        <h3 className="movie_title">{m.title}</h3>
                        <p>{m.year}</p>
                        <img src={m.poster} alt={m.title} />
                    </li>
                ))
            }
        </ul>
    )
}

function NoMoviesResult() {
    return (
        <p>No hay resultados para esta búsqueda</p>
    )
}

export function Movies({ movies }) {
    const hasMovies = Array.isArray(movies) && movies.length > 0;

    return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResult />
}