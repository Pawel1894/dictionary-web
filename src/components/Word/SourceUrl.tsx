import React from "react";
import Icon from "../../assets/images/icon-new-window.svg";

type Props = {
  data: Array<string>;
};

export default function SourceUrl({ data }: Props) {
  return (
    <div>
      <span className="text-neutral-500 text-sm underline">Source</span>
      <a className="mt-2 text-neutral-300 dark:text-white text-sm flex items-end gap-2" href={data[0]}>
        <span>{data[0]}</span>
        <img src={Icon} alt="" aria-hidden={true} />
      </a>
    </div>
  );
}
