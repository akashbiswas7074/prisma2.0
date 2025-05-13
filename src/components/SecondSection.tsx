import React, { useState } from "react";
import AutoCarousel from "./Carousel";
import useResponsiveScrollRatio from "../utils/hooks/parallaxRatio";

interface SecondSectionProps {
  setDwnldIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setMagNo: React.Dispatch<React.SetStateAction<number>>;
}

const SecondSection = ({
  setMagNo,
  setDwnldIsClicked,
}: SecondSectionProps) => {
  const { smallScreen } = useResponsiveScrollRatio();
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className="w-full mt-8 md:mt-12 flex flex-col md:flex-row justify-center items-center relative"
    >
      <div
        className={`pt-0 h-full flex justify-center items-center w-full ${
          smallScreen ? "mt-4 md:mt-0" : ""
        }`}
      >
        <AutoCarousel
          setMagNo={setMagNo}
          setDwnldIsClicked={setDwnldIsClicked}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
};

export default SecondSection;
