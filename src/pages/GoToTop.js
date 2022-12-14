import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import upArrow from "../Images/icons/upArrow.svg";
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToTopBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div>
      {isVisible && (
        <button className="bg-[#38bdf8] right-5 bottom-10  w-[40px] h-[40px] fixed  rounded-[10px] z-[2] flex items-center justify-center" onClick={goToTopBtn}>
          <img src={upArrow} className="h-7" alt="" />
        </button>
      )}
    </div>
  );
};

export default GoToTop;
