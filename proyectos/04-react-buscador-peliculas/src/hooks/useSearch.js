import { useRef } from "react";
import { useState, useEffect } from "react";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ""
      return
    }

    if (query === "") {
      setError("Por favor, ingresa un valor")
      return
    }

    if (query.length < 2) {
      setError("Por favor, ingresa al menos 2 caracteres")
      return
    }

    setError(null)
  }, [query])

  return { query, error, setQuery }
}