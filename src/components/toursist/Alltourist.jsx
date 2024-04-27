
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useLoaderData } from "react-router";
import Touristcard from "./Touristcard";


const Alltourist = () => {
    const loader = useLoaderData();
    const [items, setItems] = useState(loader);
    

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
          <div tabIndex={0} role="button" className="btn m-1 bg-green-400 text-center lg:w-[100px] p-2 text-white">
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
                items.map(data=> <Touristcard key={data._id} data={data}></Touristcard> )
            }
        </div>
        </div>
    );
};

export default Alltourist;