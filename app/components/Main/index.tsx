export const Main = (props: { children: React.ReactNode }) => {
  return (
    <main className="px-[16px] pb-[40px] pt-[56px] max-md:px-[24px] max-md:pb-[16px] max-md:pt-[32px]">
      {props.children}
    </main>
  );
};
