import classNames from "classnames";

export const Main = (props: {
  children: React.ReactNode;
  moviesList: boolean;
  moviePage: boolean;
}) => {
  const classes = classNames({
    "px-[24px] md:px-[16px]": true,
    "pb-[16px] pt-[32px] md:pb-[40px] md:pt-[56px]": props.moviesList,
    "py-0": props.moviePage,
  });

  return <main className={classes}>{props.children}</main>;
};
