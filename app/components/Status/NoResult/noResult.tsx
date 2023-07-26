import NoSearchResultImage from "./images/noResult.svg";

export const NoResult = ({ query }: { query: string | null }) => {
  return (
    <div className="m-auto flex max-w-[1368px] flex-col">
      <h1 className="mb-[10px] ml-[12px] mr-0 mt-0 text-[20px] font-medium leading-[130%] duration-[0.5s] md:mb-[40px] md:text-[36px] md:font-semibold md:leading-[120%]">
        Sorry, there are no results for “{query}”
      </h1>
      <NoSearchResultImage className="w-[668px] h-[509px] scale-[.80] self-center duration-[0.5s] md:scale-100" />
    </div>
  );
};
