import { searchMovies } from "../services/movies";
import { useMemo, useCallback, useState, useRef } from "react";

export function useMovies({ query, sort }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const previousQuery = useRef(query);

    const getMovies = useCallback(async () => {

        if (query === previousQuery.current) return;

        try {
            setLoading(true)
            setError(null)
            previousQuery.current = query;
            const movies = await searchMovies({ query })
            setMovies(movies)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }

    }, [query])

    const sortedMovies = useMemo(() => {
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies

    }, [sort, movies])

    return { movies: sortedMovies, getMovies, loading, error }
}