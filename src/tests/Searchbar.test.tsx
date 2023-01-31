import { render, fireEvent, waitFor } from "@testing-library/react";
import Searchbar from "../components/Searchbar";

test("searchbar changes the search term after 500ms", async () => {
  const setSearchTerm = jest.fn();
  const { getByPlaceholderText } = render(
    <Searchbar setSearchTerm={setSearchTerm} />
  );
  const input = getByPlaceholderText("Search movie");
  fireEvent.change(input, { target: { value: "Star Wars" } });

  await waitFor(() => {
    expect(setSearchTerm).toHaveBeenCalledWith("Star Wars");
  });
});
