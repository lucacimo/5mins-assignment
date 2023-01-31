import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config/config";
import NoImage from "../images/no_image.jpg";
import { Movie } from "../api/api";

type CastProps = {
  movie: Movie;
};

const Cast = ({ movie }: CastProps) => (
  <Box px={10} p={10}>
    <Heading as="h2" size="xl" my={4}>
      Cast
    </Heading>
    <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={5}>
      {movie.actors.map((actor) => (
        <GridItem w="100%" key={actor.name}>
          <Card>
            <Image
              width="100%"
              maxWidth="720px"
              height="auto"
              objectFit="cover"
              src={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : NoImage
              }
              alt="Caffe Latte"
            />
            <CardBody>
              <Text fontWeight="bold">{actor.name}</Text>
              <Text isTruncated={true}>{actor.character}</Text>
            </CardBody>
          </Card>
        </GridItem>
      ))}
    </Grid>
  </Box>
);

export default Cast;
