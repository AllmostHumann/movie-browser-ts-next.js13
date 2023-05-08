import Image from "next/image";

export const Tile = () => {
  return (
    <div>
      <Image
        className="flex h-auto w-[100%] justify-center rounded-[5px]"
        src="/components/Tile/images/noMoviePoster.png"
        alt="noPoster"
      />
    </div>
  );
};
