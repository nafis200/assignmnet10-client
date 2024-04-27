import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { Slide } from "react-toastify";
import Swipper from "./Swipper";

const Home = () => {
  const [light, setLight] = useState(true);
  const [typeEffect] = useTypewriter({
    words: ["light theme", "dark theme"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50
  });
  return (
    <div className={light ? "bg-white " : "bg-black"}>
      {/* <span className="text-purple-400 text-center flex justify-center lg:text-3xl md:text-3xl text-xl">{typeEffect}</span> */}
      <div
        className="flex justify-center mt-5"
        onClick={() => setLight(!light)}
      >
        {light ? (
          <CiLight className="text-5xl"></CiLight>
        ) : (
          <MdOutlineDarkMode className="text-5xl text-white"></MdOutlineDarkMode>
        )}

        
        
      </div>

      <div>
          <Swipper></Swipper>
       </div>
    </div>
  );
};

export default Home;
