import React from "react";
import { TNotFound } from "../../types";

type Props = {
  data: TNotFound;
};

export default function WordNotFound({ data }: Props) {
  return (
    <div className="text-center mt-32">
      <span className="text-5xl">😕</span>
      <h1 className="mt-11 mb-6 text-xl font-bold dark:text-white">{data.title}</h1>
      <p className="text-lg text-neutral-500">
        {data.message} {data.resolution}
      </p>
    </div>
  );
}
