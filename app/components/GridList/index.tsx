export const GridList = (props: { children: React.ReactNode }) => {
  return (
    <div className="m-0 grid list-none grid-cols-4 justify-center gap-[24px] p-0 lg:grid-cols-3 md:grid-cols-2 md:gap-[16px] sm:grid-cols-1 sm:gap-[16px]">
      {props.children}
    </div>
  );
};