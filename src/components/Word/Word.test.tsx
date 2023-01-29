import { render, screen } from "../../test/test-utils";

import Body from "../Body";

describe("Word body", () => {
  it("Should render word heading", async () => {
    render(<Body />);

    expect(await screen.findByTestId("wordHeading")).toHaveTextContent("keyboard");
  });

  it("should render play button", async () => {
    render(<Body />);

    expect(await screen.findByTestId("audioBtn")).toBeVisible();
  });

  it("should render partOfSpeech noun and verb", async () => {
    render(<Body />);

    expect(await screen.findByText("noun")).toBeInTheDocument();
    expect(await screen.findByText("verb")).toBeInTheDocument();
  });

  it("should render source url", async () => {
    render(<Body />);

    expect(await screen.findByText("https://en.wiktionary.org/wiki/keyboard")).toBeInTheDocument();
  });
});
