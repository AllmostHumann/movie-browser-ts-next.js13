export const Main = (props: { children: React.ReactNode }) => {
  return (
    <main className="px-[16px] pb-[40px] pt-[56px] md:px-[24px] md:pb-[16px] md:pt-[32px]">
      {props.children}
    </main>
  );
};
