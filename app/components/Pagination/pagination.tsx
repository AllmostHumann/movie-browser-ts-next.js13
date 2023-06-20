import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import VectorNext from "./images/VectorNext.svg";
import VectorPrevious from "./images/VectorPrevious.svg";

export const Pagination = ({
  page,
  setPage,
}: {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const router = useRouter();
  const totalPages = 500;

  const goToFirstPage = () => {
    setPage((page) => (page = 1));
    router.push(`/movies-browser/movies?page=${(page = 1)}`);
  };

  const goToPreviousPage = () => {
    setPage((page) => page - 1);
    router.push(`/movies-browser/movies?page=${page - 1}`);
  };

  const goToNextPage = () => {
    setPage((page) => page + 1);
    router.push(`/movies-browser/movies?page=${page + 1}`);
  };

  const goToLastPage = () => {
    setPage((page) => (page = 500));
    router.push(`/movies-browser/movies?page=${(page = 500)}`);
  };

  return (
    <div className="mb-[103px] mt-[40px] flex items-center justify-center">
      <button
        onClick={goToFirstPage}
        disabled={page <= 1}
        className="transition-bg mr-[8px] flex cursor-pointer items-center rounded-[5px] border-none bg-pattensBlue px-[12px] py-[8px] duration-100 active:bg-linkWater disabled:pointer-events-none disabled:bg-mystic md:mr-[12px] "
      >
        <Image
          className="mx-[4px] my-0 md:block md:text-scienceBlue"
          src={VectorPrevious}
          alt="first"
        />
        <Image
          className="mx-[4px] my-0 md:hidden md:text-scienceBlue"
          src={VectorPrevious}
          alt="first"
        />
        <p className="hidden object-none md:mx-[4px] md:my-0 md:block">First</p>
      </button>
      <button
        onClick={goToPreviousPage}
        disabled={page <= 1}
        className="transition-bg mr-[8px] flex cursor-pointer items-center rounded-[5px] border-none bg-pattensBlue px-[12px] py-[8px] duration-100 active:bg-linkWater disabled:pointer-events-none disabled:bg-mystic md:mr-[12px] "
      >
        <Image
          className="mx-[4px] my-0 hidden md:block md:text-scienceBlue"
          src={VectorPrevious}
          alt="previous"
        />
        <Image
          className="mx-[4px] my-0 md:hidden md:text-scienceBlue"
          src={VectorPrevious}
          alt="previous"
        />
        <p className="hidden object-none md:mx-[4px] md:my-0 md:block">
          Previous
        </p>
      </button>
      <div className="my-0 ml-0 mr-[8px] text-[10px] leading-6 md:ml-[16px] md:mr-[24px]  md:text-[16px] md:leading-[150%]">
        Page
        <span className="mx-[2px] my-0 text-[10px] font-semibold leading-6 text-black md:mx-[8px] md:text-[16px] md:leading-[150%]">
          {page}
        </span>
        of
        <span className="mx-[2px] my-0 text-[10px] font-semibold leading-6 text-black md:mx-[8px] md:text-[16px] md:leading-[150%]">
          {totalPages}
        </span>
      </div>
      <button
        onClick={goToNextPage}
        disabled={page >= totalPages}
        className="transition-bg mr-[8px] flex cursor-pointer items-center rounded-[5px] border-none bg-pattensBlue px-[12px] py-[8px] duration-100 active:bg-linkWater disabled:pointer-events-none disabled:bg-mystic md:mr-[12px] "
      >
        <p className="hidden object-none md:mx-[4px] md:my-0 md:block">Next</p>
        <Image
          className="mx-[4px] my-0 hidden md:block md:text-scienceBlue"
          src={VectorNext}
          alt="next"
        />
        <Image
          className="mx-[4px] my-0 md:hidden md:text-scienceBlue"
          src={VectorNext}
          alt="next"
        />
      </button>
      <button
        onClick={goToLastPage}
        disabled={page >= totalPages}
        className="transition-bg mr-[8px] flex cursor-pointer items-center rounded-[5px] border-none bg-pattensBlue px-[12px] py-[8px] duration-100 active:bg-linkWater disabled:pointer-events-none disabled:bg-mystic md:mr-[12px] "
      >
        <p className="hidden object-none md:mx-[4px] md:my-0 md:block">Last</p>
        <Image
          className="mx-[4px] my-0 md:block md:text-scienceBlue"
          src={VectorNext}
          alt="last"
        />
        <Image
          className="mx-[4px] my-0 md:hidden md:text-scienceBlue"
          src={VectorNext}
          alt="last"
        />
      </button>
    </div>
  );
};

{
  /* <Image
className="md:mx-[4px] md:my-0 md:block md:text-scienceBlue"
src={VectorPrevious}
alt="first"
/>
<Image
className="md:mx-[4px] md:my-0 md:hidden md:text-scienceBlue"
src={VectorPrevious}
alt="first"
/> */
}
