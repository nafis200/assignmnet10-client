import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import Swipper from "./Swipper";
import { useLoaderData } from "react-router";
import Torcard from "./Torcard";
import Count from "./Count";
import Excard from "./Excard";
import { Slide } from 'react-awesome-reveal'

const Home = () => {
  const loader = useLoaderData();
  const [items, setItems] = useState(loader);
  const [light, setLight] = useState(true);
  const [typeEffect] = useTypewriter({
    words: ["Tourist", "Travellar","visitor"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50
  });

  const [typeEffect1] = useTypewriter({
    words: ["Country", "Land","Countries"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50
  });

  const array = items.filter(
    (obj, index, self) =>
      index === self.findIndex((t) => t.countries === obj.countries)
  );
 

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
        <h1 className="lg:text-2xl md:text-2xl text-xl text-center font-bold mt-5">
        <span className="text-purple-400">{typeEffect}</span> <span className="text-orange-400"> spot section</span>{" "}
        </h1>
        <Slide direction={'left'}>
        <p className="text-center font-bold mt-5 lg:text-2xl mb-5 md:text-xl">For a traveller lover we are showing some better place in the world which you really refresh you.
        this place your country or your country outside
        </p>
        </Slide>

        <div className="mt-8 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]">
          {items.slice(0, 6).map((data, index) => (
            <Torcard
              key={data._id}
              data={data}
              light={light}
              index={index}
            ></Torcard>
          ))}
        </div>
      </div>

      <div>
        <h1 className="lg:text-2xl md:text-2xl text-xl text-center font-bold lg:mt-32 mt-10">
        <span className="text-purple-400">{typeEffect1}</span> <span className="text-orange-400">section</span>{" "}
         <Slide direction={'right'}><p className="text-center mt-5 mb-5">Here you will see the best place of different countries.when you click it, it will show you these countries beautiful place which different people choose</p></Slide>
          <div className="mt-8 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]">
          {array.slice(0, 6).map((data) => (
            <Count
              key={data._id}
              data={data}
              
            ></Count>
          ))}
        </div>
        </h1>
      </div>
      <div className="mt-20">
        <h1 className="lg:text-3xl md:text-2xl text-xl text-center font-bold">Plan your <span className="text-amber-400">perfect trip</span> </h1>

        <Slide direction={'left'}><p className="mt-5 text-center font-extralight">Without perfect plan you cant achieve your goal. So every work you must make a plan and work with plan</p></Slide>
       <div className="relative">
       <img className="mt-10 w-full lg:h-[455px] md:h-[400px] h-[450px]" src="https://i.postimg.cc/SRDPTKSh/1000-F-711375441-ZTScjn99w519ma2-EDj-Nw-Lq7o-Lu4k-Q0-A7.jpg" alt="" />
        <div className="absolute top-[120px] lg:top-[170px] lg:left-[20px]">
        <div>
          <p className="text-center text-white lg:font-bold md:font-bold lg:text-2xl">when you are tried and your brain dosent want to take extra load you need refreshment.Nature is the best process to take relax  with healty <br /> way for this purpose if you neen any help plese contract our agency</p>
        </div>
        <div className="space-x-4 mt-4 ml-4 flex justify-center">
          <button className="btn btn bg-primary">Contact us</button>
          <button className="btn bg-green-400">Help Desk</button>
        </div>
        </div>
       </div>
      </div> 

      <div>
        <Excard></Excard>
      </div>


    </div>
  );
};

export default Home;
