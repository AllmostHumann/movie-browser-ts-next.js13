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
    <button className="fixed right-2 bottom-2 w-[50px] h-[50px] z-[1]">
      {showTopButton && <ScrollUpIcon onClick={scrollUp} />}
    </button>
  );
};
