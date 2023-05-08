export const Search = () => {
  return (
    <div className="flex items-center">
      <div className="flex h-[44px] w-[50px] items-center justify-end rounded-l-[33px] bg-white text-waterloo mobileMax:h-[44px] mobileMax:w-[35px]">
        <svg
          className="h-[21px] w-[21px] mobileMax:w-[16px]"
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
        className="h-[44px] w-full rounded-l-[0] rounded-r-[33px] border-[1px] border-solid border-mystic/0 bg-white p-[19px] mobileMax:placeholder:text-[16px]"
        placeholder="Search..."
      />
    </div>
  );
};
