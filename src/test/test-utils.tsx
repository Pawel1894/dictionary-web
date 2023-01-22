import React, { ReactElement } from "react";
import { cleanup, render, RenderOptions } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { vi } from "vitest";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
