import { FaDollarSign } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Torcard = ({data,index,light}) => {
    const {
        _id,
        image,
        spot,
        countries,
        location,
        description,
        average_cost,
        seasonality,
        Travel,
        totaVisitorsPerYear,
        email,
        name
      } = data;
    return (
        <div className="">
            <div className="card lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl ml-7">
      <figure>
        <img
          className="w-[300px] lg:w-full md:w-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
      <h2 className="card-title mt-9"><span className='flex mb-7 lg:mb-7 md:mb-7'></span> <span className="font-extralight text-gray-400">spot Name:</span> <span className="text-purple-400">{spot} </span> </h2>
      <h2 className='font-bold flex items-center gap-2 text-green-400'> <span className="text-orange-500"> <FaDollarSign></FaDollarSign> </span> average_cost <span className='text-red-500'>{average_cost}</span> </h2>
      <h2 className='font-bold flex items-center gap-2 text-gray-500'> <span className="flex items-center gap-2"> <FaPeopleGroup className="text-xl text-amber-400"></FaPeopleGroup> <span className="text-orange-400">total visit</span>  </span> {totaVisitorsPerYear} per year</h2>

      <h2 className='font-bold flex items-center gap-2'> <span className="flex items-center gap-2"> <IoIosTime className="text-xl text-yellow-500"></IoIosTime> <span className="text-purple-400">travel time</span>  </span> <span className=" text-green-400">{Travel}</span> <span className="text-green-400">Hours</span> </h2>

      <h2 className='font-bold flex items-center gap-2'> <span className="flex items-center gap-2"> <TiWeatherPartlySunny  className="text-xl text-red-500"></TiWeatherPartlySunny > <span className="text-purple-400">Seasonlity</span>  </span> <span className="text-purple-700">{seasonality} </span> </h2>
      <div className="card-actions mt-2">
      <NavLink to={`/item/${_id}`}> <button className='btn btn-primary'>View details</button> </NavLink>
    </div>
      </div>
      
    </div>
        </div>
    );
};

export default Torcard;