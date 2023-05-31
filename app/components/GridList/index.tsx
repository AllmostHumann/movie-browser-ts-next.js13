export const GridList = (props: { children: React.ReactNode }) => {
  return (
    <div className="m-0 grid list-none grid-cols-4 justify-center gap-[24px] p-0 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-[16px] max-sm:grid-cols-1 max-sm:gap-[16px]">
      {props.children}
    </div>
  );
};