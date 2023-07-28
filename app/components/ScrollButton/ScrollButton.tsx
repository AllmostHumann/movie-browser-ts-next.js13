"use client";
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
    <button className="fixed right-3 bottom-3 z-[1] bg-[#FFFFFF] rounded-full border-solid border-[2px] border-[#74788B]">
      {showTopButton && (
        <ScrollUpIcon
          className="w-[50px] h-[50px] p-[5px]"
          onClick={scrollUp}
        />
      )}
    </button>
  );
};
