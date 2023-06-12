export const Container = (props: { children: React.ReactNode }) => {
  return <div className="m-auto w-full max-w-[1368px]">{props.children}</div>;
};
