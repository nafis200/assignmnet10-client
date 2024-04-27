import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import Swipper from "./Swipper";
import { useLoaderData } from "react-router";
import Torcard from "./Torcard";

const Home = () => {
  const loader = useLoaderData();
    const [items, setItems] = useState(loader);
  const [light, setLight] = useState(true);
  const [typeEffect] = useTypewriter({
    words: ["light theme", "dark theme"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50
  });
  return (
    <div className={light ? "bg-white " : "bg-black text-white"}>
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
         <div className="mt-5">
          <Swipper></Swipper>
       </div>

       <div>
        <h1 className="lg:text-2xl md:text-2xl text-xl text-center font-bold mt-5">Tourist spot section</h1>

        <div className="mt-8 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]" >
            {
                items.slice(0,6).map((data,index)=> <Torcard key={data._id} data={data} index={index}></Torcard> )
            }
        </div>

       </div>

       
    </div>
  );
};

export default Home;
