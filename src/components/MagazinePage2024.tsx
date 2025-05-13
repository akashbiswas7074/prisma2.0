import { useState } from "react";
import CloudAnimation from "./CloudAnimation";
import FireflyCanvas from "./FireFlies";
import { motion } from "framer-motion";
import DemoBook from "./Mag24";

const MagazinePage2024 = () => {
  const [cloudAnim, setCloudAnim] = useState(false);
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center relative bg-cover bg-center bg-no-repeat bg-[url('/background-mobile.png')] md:bg-[url('/Artboard 1.png')] overflow-hidden">
      {/* Header Section */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center text-white pt-3 sm:pt-4 z-40 px-2">
          <img src="/KGEC_LOGO.svg" alt="KGEC Logo" className="h-8 sm:h-10 md:h-12 mb-1 sm:mb-2" />
          <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold font-sans text-white text-center">KALYANI GOVERNMENT ENGINEERING COLLEGE</h3>
          <p className="text-xs sm:text-sm md:text-md font-sans text-blue-200 text-center">COMPUTER SCIENCE AND ENGINEERING DEPARTMENT</p>
          <p className="text-xs sm:text-sm md:text-md font-sans text-blue-100 mt-1 text-center">presents</p>
        </div>
      <div className="h-full w-full absolute overflow-hidden ">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-60%" }}
          transition={{
            duration: 15,
            delay: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className=" main-gradient -z-40 absolute bottom-0  flex justify-center items-center"
        />
      </div>
      <div className="z-[20] ">
        {/* <FireflyCanvas /> */}
      </div>
      {/* Ensure DemoBook container allows for centering and scaling */}
      <div className="z-[30] flex justify-center items-center w-full h-full pt-20 sm:pt-24 md:pt-28">
        <DemoBook/>
      </div>
    </div>
  );
};

export default MagazinePage2024;
