const API_KEY = "7ec61cda";

export const searchMovies = async ({ query }) => {
    if (query === "") return null;

    try {
        const res = await fetch(`https://omdbapi.com/?apikey=${API_KEY}&s=${query}`);
        const data = await res.json();

        const movies = data.Search;

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
    } catch (e) {
        throw new Error(`Error searching movies: ${e.message}`)
    }
}