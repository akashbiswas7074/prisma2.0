import { useEffect } from "react";
import "./Mag.scss";
// import BhorAnimation from "./BhorAnimation copy";
// import useResponsiveScrollRatio from "../utils/hooks/parallaxRatio";
import { useNavigate } from "react-router-dom";
// import SecondSection from "./SecondSection"; // Added import for SecondSection

const Mag = () => {
  // const { smallScreen } = useResponsiveScrollRatio();
  // const [allAnimationEnd, setAllAnimationEnd] = useState(true);
  // const [_bhorEnded, setBhorEnded] = useState(false);
  // const [dwnldIsClicked, setDwnldIsClicked] = useState(false); // Restored state
  // const [magNo, setMagNo] = useState(0); // Restored state
  const navigate = useNavigate();

  useEffect(() => {
    // Navigation logic (currently commented out)
    // if (dwnldIsClicked) {
    //   const timeoutId = setTimeout(() => {
    //     if (magNo == 0) {
    //       navigate("/magazineview2023");
    //     } else if (magNo == 1) {
    //       navigate("/magazineview2024");
    //     }
    //   }, 1500);
    //   return () => clearTimeout(timeoutId);
    // }
  }, [navigate]);

  return (
    <div className="relative w-full h-screen">
      <div
        className="landscape overflow-hidden h-full w-full relative flex flex-col items-center justify-between text-center"
        style={{
          backgroundImage: "url('/background-mobile.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Updated top section: KGEC Logo and College Info */}
        <div className="absolute top-0 left-0 right-0 flex flex-col items-center text-white pt-4 z-40 px-2">
          <img src="/KGEC_LOGO.svg" alt="KGEC Logo" className="h-10 sm:h-12 mb-2" />
          <h3 className="text-xl sm:text-2xl font-semibold font-sans text-white">KALYANI GOVERNMENT ENGINEERING COLLEGE</h3>
          <p className="text-sm sm:text-md font-sans text-blue-200">COMPUTER SCIENCE AND ENGINEERING DEPARTMENT</p>
          <p className="text-sm sm:text-md font-sans text-blue-100 mt-1">presents</p>
        </div>

     

        {/* Main Content Area: Left (Prisma) and Right (Book and Cloth) */}
        <div className="relative z-10 flex flex-col md:flex-row w-full flex-grow items-stretch justify-center px-4 mt-32 md:mt-36 mb-12">
          {/* Left Pane: Prisma 2.0 */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-white p-4 text-center mb-8 md:mb-0 slide-in-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-bold mb-2 sm:mb-3 leading-tight uppercase">Prisma 2.0</h1>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl max-w-md md:max-w-lg">
              The annual technical magazine by the Department of Computer Science and Engineering, KGEC.
            </p>
          </div>

          {/* Right Pane: Book and Cloth */}
          <div className="w-full md:w-1/2 relative flex flex-col items-center justify-end p-4 min-h-[300px] sm:min-h-[350px] md:min-h-0 slide-in-right">
            <img
              src="/clouth-table.png"
              alt="Cloth table under book"
              className="absolute md:bottom-[-20rem] bottom-[-15rem] left-1/2 -translate-x-1/2 w-screen  h-auto z-45"
            />
            <img
              src="/3d-book.png"
              alt="Annual Magazine 2024"
              className="absolute bottom-[-10rem] sm:bottom-6 md:bottom-[-6rem] left-1/2 -translate-x-1/2 w-60 sm:w-56 md:w-[20rem] lg:w-[22rem] h-auto floating-book cursor-pointer z-50"
              onClick={() => navigate("/magazineview2024")}
            />
          </div>
        </div>

        {/* downpatern.png at the very bottom of the screen, full width */}
        <img
          src="/downpatern.png" 
          alt="Bottom Screen Pattern"
          className="absolute bottom-0 left-0 w-full h-auto z-0"
        />

     
      
      </div>
    </div>
  );
};

export default Mag;
