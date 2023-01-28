import App from "../../App";
import { render, screen, userEvent } from "../../test/test-utils";

describe("Font chooser", () => {
  it("Check if app entry contains default value of font sans serif", async () => {
    render(<App />);
    const appEntry = screen.getByTestId("appEntry");
    expect(appEntry).toHaveAttribute("data-font", "sans serif");
  });

  it("Change font to serif", async () => {
    render(<App />);
    const appEntry = screen.getByTestId("appEntry");
    const btn = screen.getByTestId("fontSerif");

    await userEvent.click(btn);
    expect(appEntry).toHaveAttribute("data-font", "serif");
  });

  it("Change font to mono", async () => {
    render(<App />);
    const appEntry = screen.getByTestId("appEntry");
    const btn = screen.getByTestId("fontMono");

    await userEvent.click(btn);
    expect(appEntry).toHaveAttribute("data-font", "mono");
  });

  it("Change font to mono then to sans serif", async () => {
    render(<App />);
    const appEntry = screen.getByTestId("appEntry");
    const btn = screen.getByTestId("fontMono");
    const btnSans = screen.getByTestId("fontSans");

    await userEvent.click(btn);
    expect(appEntry).toHaveAttribute("data-font", "mono");
    await userEvent.click(btnSans);
    expect(appEntry).toHaveAttribute("data-font", "sans serif");
  });
});
