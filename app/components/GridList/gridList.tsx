import classNames from "classnames";

export const GridList = (props: {
  children: React.ReactNode;
  movies: boolean;
  people: boolean;
}) => {
  const classes = classNames({
    "m-0 p-0 grid gap-[16px] md:gap-[24px] justify-center list-none": true,
    "grid-cols-8 md:grid-cols-7": props.people,
    "grid-cols-10 md:grid-cols-9": props.movies,
  });

  return <div className={classes}>{props.children}</div>;
};
