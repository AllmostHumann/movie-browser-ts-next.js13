export const SectionTitle = (props: { children: React.ReactNode }) => {
  return (
    <h1 className="text-woodsmoke mb-[24px] ml-0 mr-0 text-[18px] font-semibold leading-[120%] md:m-0 md:mb-[12px] md:ml-0 md:mr-0 md:text-[36px]">
      {props.children}
    </h1>
  );
};
