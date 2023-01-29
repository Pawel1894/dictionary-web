import App from "../../App";
import { render, screen, userEvent } from "../../test/test-utils";

describe("Search component", () => {
  it("should be rendered", async () => {
    render(<App />);
    const searchInputEl = screen.getByTestId("searchInput");
    expect(searchInputEl).toBeInTheDocument();
  });

  it("should change input value", async () => {
    render(<App />);
    const searchInputEl = screen.getByTestId("searchInput");
    await userEvent.clear(searchInputEl);
    await userEvent.type(searchInputEl, "test");
    expect(searchInputEl).toHaveValue("test");
  });

  it("error message should be hidden by default", async () => {
    render(<App />);
    expect(screen.queryByTestId("searchInputError")).toBeNull();
  });

  it("should display error message", async () => {
    render(<App />);
    const searchInputEl = screen.getByTestId("searchInput");
    expect(screen.queryByTestId("searchInputError")).toBeNull();
    await userEvent.type(searchInputEl, "t");
    await userEvent.clear(searchInputEl);
    expect(await screen.findByTestId("searchInputError")).toBeVisible();
  });
});
