import classNames from "classnames";

export const Main = (props: {
  children: React.ReactNode;
  list: boolean;
  page: boolean;
}) => {
  const classes = classNames({
    "px-[24px] md:px-[16px]": true,
    "pb-[16px] pt-[32px] md:pb-[40px] md:pt-[56px]": props.list,
    "py-[24px]": props.page,
  });

  return <main className={classes}>{props.children}</main>;
};
