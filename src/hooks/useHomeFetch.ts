import { useState, useEffect } from "react";
// API
import API, { Movie } from "../api/api";

const initialState = {
  page: 0,
  results: [] as Movie[],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setEror] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page: number, searchTerm = "") => {
    try {
      setEror(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setEror(true);
    }
    setLoading(false);
  };

  // Initial
  useEffect(() => {
    fetchMovies(1);
  }, []);

  // Search
  useEffect(() => {
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // Load More Button
  useEffect(() => {
    if (!isLoadingMore) {
      return;
    }
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
