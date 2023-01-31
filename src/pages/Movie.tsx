import { Box, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useMovieFetch } from "../hooks/useMovieFetch";
import { Fragment } from "react";
import MovieInfo from "../components/Movieinfo";
import Cast from "../components/Cast";

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (error)
    return (
      <Box
        height="80vh"
        px={10}
        py={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        Something went wrong, please try later
      </Box>
    );

  if (loading) {
    return (
      <Box
        height="80vh"
        px={4}
        py={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner />
      </Box>
    );
  }

  return (
    <Fragment>
      <MovieInfo movie={movie} />
      <Cast movie={movie} />
    </Fragment>
  );
};

export default Movie;
