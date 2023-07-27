import { useState, useEffect } from "react";
import ScrollUpIcon from "./images/scrollUp.svg";

export const ScrollButton = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="fixed right-0 bottom-0 md:w-[50px] md:h-[50px] w-[30px] h-[30px] z-[1]">
      {showTopButton && <ScrollUpIcon onClick={scrollUp} />}
    </button>
  );
};
