
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useLoaderData } from "react-router";
import Touristcard from "./Touristcard";
import { Typewriter,Cursor, useTypewriter } from 'react-simple-typewriter'

const Alltourist = () => {
    const loader = useLoaderData();
    const [items, setItems] = useState(loader);
    const [typeEffect] = useTypewriter({
      words : ['spot', 'tourist-spot', 
      'picnic spot', 'visiting spot'],
      loop:{},
      typeSpeed:100,
      deleteSpeed:50
   })    

    const Sortfunction = (check) =>{
        let datacard = [...items]
        if(check === "des"){
            datacard.sort((a,b)=>a.average_cost - b.average_cost)
        }
        console.log(datacard);
        setItems(datacard)
    }
    return (
        <div>
             <section className="container mx-auto flex justify-center">
        <div className="dropdown dropdown-bottom ">
          <h1 className="mt-3 font-bold text-xl">All <span className="text-purple-400">{typeEffect}</span></h1>
          <div tabIndex={0} role="button" className="btn m-1 bg-green-400 text-center lg:w-[100px] p-2 text-white mt-5">
            <span className=" flex items-center gap-2">Sort By <IoIosArrowDropdown className="lg:text-2xl"></IoIosArrowDropdown> </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={()=>Sortfunction('des')}>sorted</a>
            </li>
          </ul>
        </div>
      </section>
      <div className="mt-20 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]" >
            {
                items.map((data,index)=> <Touristcard key={data._id} data={data}></Touristcard> )
            }
        </div>
        </div>
    );
};

export default Alltourist;