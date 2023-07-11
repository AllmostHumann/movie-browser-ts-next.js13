"use client";

import { Main } from "../../Main/main";

export const LoadingPage = () => {
  return (
    <Main
      page={true}
      list={true}
    >
      <div className="m-auto flex max-w-[1368px] flex-col">
        <div className="border-t-solid border-t-[8px]border-solid h-[65px] w-[65px] animate-spin self-center rounded-[50%] border-[8px] border-snuff border-t-black duration-[0.5s] md:m-[40px] md:h-[91px] md:w-[91px] md:border-[12px] md:border-t-[12px]" />
      </div>
    </Main>
  );
};
