import { AxiosError } from "axios";
import React from "react";
import { TNotFound } from "../../types";
import ServerError from "./WordNotFound";

interface Props {
  error: AxiosError;
}

export default function Error({ error }: Props) {
  return (
    <div
      className="mt-8 px-6
    md:px-11"
    >
      {error.response?.status === 404 ? (
        <ServerError data={error.response.data as TNotFound} />
      ) : (
        <span className="dark:text-white">Network error: {error.message}</span>
      )}
    </div>
  );
}
