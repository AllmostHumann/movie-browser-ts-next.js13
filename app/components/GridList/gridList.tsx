export const GridList = (props: {
  children: React.ReactNode;
  credits: boolean;
}) => {
  return (
    <div
      className={`${
        !!props.credits
          ? "m-0 grid list-none grid-cols-2 justify-center gap-[16px] p-0 sm:grid-cols-2 sm:gap-[16px] md:grid-cols-3 md:gap-[16px] xl:grid-cols-4 xl:gap-[24px]"
          : "m-0 grid list-none grid-cols-1 justify-center gap-[16px] p-0 sm:grid-cols-2 sm:gap-[16px] md:grid-cols-3 md:gap-[16px] xl:grid-cols-4 xl:gap-[24px] "
      }`}
    >
      {props.children}
    </div>
  );
};
