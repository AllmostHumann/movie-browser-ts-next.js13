import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import VectorNext from "./images/vectorNext.svg";
import VectorPrevious from "./images/vectorPrevious.svg";
import { searchQueryParamName } from "@/app/api/hooks/queries/useQueryParameter";

export const Pagination = ({
  total_pages,
}: {
  total_pages: number | undefined | boolean;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const query = searchParams.get(searchQueryParamName);
  const totalPages = query ? total_pages : (total_pages = 500);
  const pathname = usePathname();

  const goToFirstPage = () => {
    if (currentPage !== 1) {
      query
        ? router.replace(
            `${pathname}?` +
              qs.stringify(
                { [searchQueryParamName]: query, page: 1 },
                { skipNulls: true },
              ),
          )
        : router.replace(
            `${pathname}?` + qs.stringify({ page: 1 }, { skipNulls: true }),
          );
    }
  };

  const goToPreviousPage = () => {
    if (currentPage !== 1) {
      const previousPage = currentPage - 1;
      query
        ? router.replace(
            `${pathname}?` +
              qs.stringify(
                { [searchQueryParamName]: query, page: previousPage },
                { skipNulls: true },
              ),
          )
        : router.replace(
            `${pathname}?` +
              qs.stringify({ page: previousPage }, { skipNulls: true }),
          );
    }
  };

  const goToNextPage = () => {
    if (currentPage !== totalPages) {
      const nextPage = currentPage + 1;
      query
        ? router.replace(
            `${pathname}?` +
              qs.stringify(
                { [searchQueryParamName]: query, page: nextPage },
                { skipNulls: true },
              ),
          )
        : router.replace(
            `${pathname}?` +
              qs.stringify({ page: nextPage }, { skipNulls: true }),
          );
    }
  };

  const goToLastPage = () => {
    if (currentPage !== totalPages) {
      query
        ? router.replace(
            `${pathname}?` +
              qs.stringify(
                { [searchQueryParamName]: query, page: totalPages },
                { skipNulls: true },
              ),
          )
        : router.replace(
            `${pathname}?` +
              qs.stringify({ page: totalPages }, { skipNulls: true }),
          );
    }
  };

  return (
    <div className="mb-[103px] mt-[40px] flex items-center justify-center">
      <button
        onClick={goToFirstPage}
        disabled={currentPage <= 1}
        className="transition-bg mr-[8px] flex cursor-pointer items-center rounded-[5px] border-none bg-pattensBlue px-[12px] py-[8px] duration-100 active:bg-linkWater disabled:pointer-events-none disabled:bg-mystic md:mr-[12px] "
      >
        <VectorPrevious className="w-[7px] h-[12px] mx-[4px] my-0 md:block md:text-scienceBlue" />
        <VectorPrevious className="w-[7px] h-[12px] mx-[4px] my-0 md:hidden md:text-scienceBlue" />
        <p className="hidden object-none md:mx-[4px] md:my-0 md:block">First</p>
      </button>
      <button
        onClick={goToPreviousPage}
        disabled={currentPage <= 1}
        className="transition-bg mr-[8px] flex cursor-pointer items-center rounded-[5px] border-none bg-pattensBlue px-[12px] py-[8px] duration-100 active:bg-linkWater disabled:pointer-events-none disabled:bg-mystic md:mr-[12px] "
      >
        <VectorPrevious className="w-[7px] h-[12px] mx-[4px] my-0 md:block md:text-scienceBlue" />
        <VectorPrevious className="w-[7px] h-[12px] mx-[4px] my-0 md:hidden md:text-scienceBlue" />
        <p className="hidden object-none md:mx-[4px] md:my-0 md:block">
          Previous
        </p>
      </button>
      <div className="my-0 ml-0 mr-[8px] text-[10px] leading-6 md:ml-[16px] md:mr-[24px]  md:text-[16px] md:leading-[150%]">
        Page
        <span className="mx-[2px] my-0 text-[10px] font-semibold leading-6 text-black md:mx-[8px] md:text-[16px] md:leading-[150%]">
          {currentPage}
        </span>
        of
        <span className="mx-[2px] my-0 text-[10px] font-semibold leading-6 text-black md:mx-[8px] md:text-[16px] md:leading-[150%]">
          {totalPages}
        </span>
      </div>
      <button
        onClick={goToNextPage}
        disabled={currentPage >= Number(totalPages)}
        className="transition-bg mr-[8px] flex cursor-pointer items-center rounded-[5px] border-none bg-pattensBlue px-[12px] py-[8px] duration-100 active:bg-linkWater disabled:pointer-events-none disabled:bg-mystic md:mr-[12px] "
      >
        <p className="hidden object-none md:mx-[4px] md:my-0 md:block">Next</p>
        <VectorNext className="w-[7px] h-[12px] mx-[4px] my-0 hidden md:block md:text-scienceBlue" />
        <VectorNext className="w-[7px] h-[12px] mx-[4px] my-0 md:hidden md:text-scienceBlue" />
      </button>
      <button
        onClick={goToLastPage}
        disabled={currentPage >= Number(totalPages)}
        className="transition-bg mr-[8px] flex cursor-pointer items-center rounded-[5px] border-none bg-pattensBlue px-[12px] py-[8px] duration-100 active:bg-linkWater disabled:pointer-events-none disabled:bg-mystic md:mr-[12px] "
      >
        <p className="hidden object-none md:mx-[4px] md:my-0 md:block">Last</p>
        <VectorNext className="w-[7px] h-[12px] mx-[4px] my-0 md:block md:text-scienceBlue" />
        <VectorNext className="w-[7px] h-[12px] mx-[4px] my-0 md:hidden md:text-scienceBlue" />
      </button>
    </div>
  );
};
