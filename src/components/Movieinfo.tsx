import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config/config";
import NoImage from "../images/no_image.jpg";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { calcTime } from "../utils/utils";
import { Movie } from "../api/api";

type MovieInfoProps = {
  movie: Movie;
};

const MovieInfo = ({ movie }: MovieInfoProps) => (
  <Box
    px={10}
    py={10}
    display="flex"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    backgroundImage={`url(${
      movie.backdrop_path
        ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`
        : NoImage
    })`}
  >
    <Card
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      variant="outline"
      width="100%"
      backgroundColor="rgba(16, 17, 25, 0.7);"
    >
      <Image
        objectFit="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        maxW={{ base: "100%", md: "250px", sm: "100%" }}
        maxHeight={{ md: "400px" }}
        src={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading color="white" size="xl" mb={4}>
            {movie.title}
          </Heading>
          <Heading color="white" size="md">
            Plot
          </Heading>
          <Text color="white" py="2" mb={4}>
            {movie.overview}
          </Text>
          <Heading color="white" size="md">
            Director{movie.directors.length > 1 ? "S" : ""}
          </Heading>
          {movie.directors.map((director) => (
            <Text color="white" key={director.credit_id} py="2" mb={4}>
              {director.name}
            </Text>
          ))}
          <Heading color="white" size="md">
            Duration
          </Heading>
          <Text color="white" py="2" mb={4}>
            {calcTime(movie.runtime)}
          </Text>
          <Heading color="white" size="md">
            Rate
          </Heading>
          <Text color="white" py="2" mb={4}>
            {movie.vote_average.toFixed(1)}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  </Box>
);

export default MovieInfo;
