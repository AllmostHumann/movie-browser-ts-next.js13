import { useState, useEffect } from "react";
import ScrollUpIcon from "./images/scrollUp.svg";

export const ScrollButton = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisiblity = () => {
      window.scrollY > 500 ? setShowTopButton(true) : setShowTopButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisiblity);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisiblity);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="fixed right-3 bottom-3 w-[50px] h-[50px] z-[1]">
      {showTopButton && <ScrollUpIcon onClick={scrollUp} />}
    </button>
  );
};
