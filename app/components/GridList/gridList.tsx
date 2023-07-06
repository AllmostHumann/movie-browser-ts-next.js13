import classNames from "classnames";

export const GridList = (props: {
  children: React.ReactNode;
  movies: boolean;
  people: boolean;
}) => {
  const classes = classNames({
    "m-0 p-0 grid gap-[16px] md:gap-[24px] justify-center list-none": true,
    "grid-cols-8 md:grid-cols-7": props.people,
    "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4": props.movies,
  });

  return <div className={classes}>{props.children}</div>;
};
