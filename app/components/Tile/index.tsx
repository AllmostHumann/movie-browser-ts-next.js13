import Image from "next/image";
import noMoviePoster from "./images/noMoviePoster.png";
import noPersonPoster from "./images/noPersonPoster.png";

export const Tile = () => {
  return (
    <div>
      <Image
        className="flex h-auto w-[100%] justify-center rounded-[5px]"
        src={noMoviePoster}
        alt="noMoviePoster"
      />
    </div>
  );
};
