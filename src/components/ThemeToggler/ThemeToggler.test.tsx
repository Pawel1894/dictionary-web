import App from "../../App";
import { render, screen, userEvent, waitFor } from "../../test/test-utils";

describe("Theme toggler", async () => {
  it("Switch theme to dark and then to light", async () => {
    render(<App />);
    const appEntry = screen.getByTestId("appEntry");
    const themeSwitch = screen.getByTestId("themeSwitch");

    await userEvent.click(themeSwitch);
    expect(appEntry).toHaveClass("dark");
    await userEvent.click(themeSwitch);
    expect(appEntry).not.toHaveClass("dark");
  });
});
