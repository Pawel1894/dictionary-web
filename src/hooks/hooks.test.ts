import { rest } from "msw";
import * as React from "react";
import { renderHook, waitFor } from "@testing-library/react";
import { server } from "../test/setup";
import { createWrapper } from "../test/test-utils";
import { useDictionary } from "./useDictionary";

describe("query hook", () => {
  test("successful dictionary query hook", async () => {
    const { result } = renderHook(() => useDictionary("keyboard"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    const data = result.current.data ? result.current.data[0] : null;
    expect(data?.word).toBe("keyboard");
  });

  test("failure dictionary query hook", async () => {
    server.use(
      rest.get("*", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const { result } = renderHook(() => useDictionary("keyboard"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});
