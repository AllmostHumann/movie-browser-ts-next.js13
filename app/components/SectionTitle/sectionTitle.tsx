import classNames from "classnames";

export const SectionTitle = (props: {
  children: React.ReactNode;
  details: boolean;
  list: boolean;
}) => {
  const classes = classNames({
    "text-woodsmoke text-[18px] max-w-[1368px] font-semibold md:text-[36px] leading-[120%]":
      true,
    "mt-[24px] mx-0 mb-[16px] md:mt-[64px] md:mx-0 md:mb-[24px]": props.details,
    "mt-0 mx-0 mb-[12px] md:mb-[24px]": props.list,
  });

  return <h1 className={classes}>{props.children}</h1>;
};
