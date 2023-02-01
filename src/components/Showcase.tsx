import { Box, Grid, GridItem, Heading, Image, Spinner } from "@chakra-ui/react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config/config";
import NoImage from "../images/no_image.jpg";
import { Link } from "react-router-dom";
import { Movie } from "../api/api";

type ShowcaseProps = {
  movies: Movie[];
  searchTerm: string;
  loading: boolean;
};

const Showcase = ({ movies, searchTerm, loading }: ShowcaseProps) => (
  <Box px={10} py={8}>
    <Heading as="h2" size="xl" my={4}>
      {searchTerm ? "Search result" : "Popular movies"}
    </Heading>
    <Box>
      {loading ? (
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
      ) : (
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={5}>
          {movies.map((movie) => (
            <Link to={`/${movie.id}`} key={movie.id}>
              <GridItem w="100%">
                <Image
                  width="100%"
                  maxWidth="720px"
                  height="auto"
                  objectFit="cover"
                  src={
                    movie.poster_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                      : NoImage
                  }
                  alt="slide"
                />
              </GridItem>
            </Link>
          ))}
        </Grid>
      )}
    </Box>
  </Box>
);

export default Showcase;
