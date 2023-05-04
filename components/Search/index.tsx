"use client";

export const Search = () => {
  return (
    <div className="flex items-center">
      <div className="bg-white text-waterloo h-[44px] w-[50px] rounded-t-[32px] rounded-r-[0] rounded-b-[0] rounded-l-[33px] flex items-center justify-end mobileMax:h-[44px] mobileMax:w-[35px]">
        <svg
          className="w-[21px] h-[21px] mobileMax:w-[16px]"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="9.76639"
            cy="9.76657"
            r="8.98856"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.0181 16.4851L19.5421 20"
            stroke="#7E839A"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <input
        className="h-[44px] w-full p-[19px] border-[1px] border-solid border-mystic/0 rounded-r-[33px] rounded-l-[0] bg-white mobileMax:placeholder:text-[16px]"
        placeholder="Search..."
      />
    </div>
  );
};
