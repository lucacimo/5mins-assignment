import CaptionCarousel from "../components/CaptionCarousel";
import Searchbar from "../components/Searchbar";
import { Box } from "@chakra-ui/react";
import Showcase from "../components/Showcase";
import { useHomeFetch } from "../hooks/useHomeFetch";
import { useCallback, useEffect } from "react";

const HomePage = () => {
  const { state, error, searchTerm, loading, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  const onScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setIsLoadingMore(true);
    }
  }, [setIsLoadingMore]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  if (error) {
    return (
      <Box px={4} py={4}>
        An error occurred, please try again later
      </Box>
    );
  }

  return (
    <Box>
      {!searchTerm && state.results[0] ? (
        <CaptionCarousel movies={state.results} />
      ) : null}
      <Searchbar setSearchTerm={setSearchTerm} />
      <Showcase
        movies={state.results}
        searchTerm={searchTerm}
        loading={loading}
      />
    </Box>
  );
};

export default HomePage;
