import Image from "next/image";
import VectorNext from "./images/VectorNext.svg";
import VectorPrevious from "./images/VectorPrevious.svg";

export const Pagination = () => {
  return (
    <div className="mb-[103px] mt-[40px] flex items-center justify-center">
      <div className="transition-bg mr-[8px] flex cursor-pointer items-center rounded-[5px] border-none bg-pattensBlue px-[8px] py-[12px] duration-100 active:bg-linkWater disabled:pointer-events-none disabled:bg-mystic md:mr-[12px] ">
        <Image
          className="hidden md:mx-[4px] md:my-0 md:block md:text-scienceBlue"
          src={VectorPrevious}
          alt="previous"
        />
        <Image
          className="md:mx-[4px] md:my-0 md:hidden md:text-scienceBlue"
          src={VectorPrevious}
          alt="previous"
        />
        <p className="hidden object-none md:mx-[4px] md:my-0 md:block">First</p>
      </div>
      <div className="transition-bg mr-[8px] flex cursor-pointer items-center rounded-[5px] border-none bg-pattensBlue px-[8px] py-[12px] duration-100 active:bg-linkWater disabled:pointer-events-none disabled:bg-mystic md:mr-[12px] ">
        <Image
          className="hidden md:mx-[4px] md:my-0 md:block md:text-scienceBlue"
          src={VectorPrevious}
          alt="previous"
        />
        <Image
          className="md:mx-[4px] md:my-0 md:hidden md:text-scienceBlue"
          src={VectorPrevious}
          alt="previous"
        />
        <p className="hidden object-none md:mx-[4px] md:my-0 md:block">
          Previous
        </p>
      </div>
      <div className="my-0 ml-0 mr-[8px] text-[10px] leading-6 md:ml-[16px] md:mr-[24px]  md:text-[16px] md:leading-[150%]">
        Page
        <span className="mx-[2px] my-0 text-[10px] font-semibold leading-6 text-black md:mx-[8px] md:text-[16px] md:leading-[150%]">
          1
        </span>
        of
        <span className="mx-[2px] my-0 text-[10px] font-semibold leading-6 text-black md:mx-[8px] md:text-[16px] md:leading-[150%]">
          500
        </span>
      </div>
      <div className="transition-bg mr-[8px] flex cursor-pointer items-center rounded-[5px] border-none bg-pattensBlue px-[8px] py-[12px] duration-100 active:bg-linkWater disabled:pointer-events-none disabled:bg-mystic md:mr-[12px] ">
        <Image
          className="hidden md:mx-[4px] md:my-0 md:block md:text-scienceBlue"
          src={VectorNext}
          alt="previous"
        />
        <Image
          className="md:mx-[4px] md:my-0 md:hidden md:text-scienceBlue"
          src={VectorNext}
          alt="previous"
        />
        <p className="hidden object-none md:mx-[4px] md:my-0 md:block">Next</p>
      </div>
      <div className="transition-bg mr-[8px] flex cursor-pointer items-center rounded-[5px] border-none bg-pattensBlue px-[8px] py-[12px] duration-100 active:bg-linkWater disabled:pointer-events-none disabled:bg-mystic md:mr-[12px] ">
        <Image
          className="hidden md:mx-[4px] md:my-0 md:block md:text-scienceBlue"
          src={VectorNext}
          alt="previous"
        />
        <Image
          className="md:mx-[4px] md:my-0 md:hidden md:text-scienceBlue"
          src={VectorNext}
          alt="previous"
        />
        <p className="hidden object-none md:mx-[4px] md:my-0 md:block">Last</p>
      </div>
    </div>
  );
};
