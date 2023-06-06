export const Main = (props: { children: React.ReactNode }) => {
  return (
    <main className="px-[24px] pb-[16px] pt-[32px] md:px-[16px] md:pb-[40px] md:pt-[56px]">
      {props.children}
    </main>
  );
};
