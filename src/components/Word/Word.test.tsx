import { render, screen } from "../../test/test-utils";
import { data } from "../../test/handlers";
import Word from "./Word";

describe("Word body", () => {
  it("should render word heading", async () => {
    render(<Word data={data} isInitialLoading={false} error={null} isError={false} />);

    expect(await screen.findByTestId("wordHeading")).toHaveTextContent("keyboard");
  });

  it("should render play button", async () => {
    render(<Word data={data} isInitialLoading={false} error={null} isError={false} />);

    expect(await screen.findByTestId("audioBtn")).toBeVisible();
  });
});
