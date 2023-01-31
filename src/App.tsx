import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

export const App = () => (
  <React.Fragment>
    <Router>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:movieId" element={<Movie />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </Router>
  </React.Fragment>
);
