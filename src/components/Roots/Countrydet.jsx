

import { FaDollarSign } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { NavLink } from "react-router-dom";
const Countrydet = ({data}) => {
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
        <div>
           <div className="card lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl ml-7">
      <figure>
        <img
          className="w-[300px] lg:w-full md:w-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
      <h2 className="card-title mt-9"><span className='flex mb-7 lg:mb-7 md:mb-7'></span> <span className="font-extralight">spot Name:</span> {spot}</h2>
      <h2 className="card-title "><span className='flex mb-7 lg:mb-7 md:mb-7'></span> <span className="font-extralight">Country Name:</span> {countries}</h2>
      <h2 className="card-title "><span className='flex mb-7 lg:mb-7 md:mb-7'></span> <span className="font-extralight">Location:</span> {location}</h2>
      <h2 className="card-title "><span className='flex mb-7 lg:mb-7 md:mb-7'></span> <span className="font-extralight">description:</span> {description.slice(0,50)}</h2>
      <h2 className='font-bold flex items-center gap-2'> <span> <FaDollarSign></FaDollarSign> </span> average_cost <span className='text-red-500'>{average_cost}</span> </h2>
      <h2 className='font-bold flex items-center gap-2'> <span className="flex items-center gap-2"> <TiWeatherPartlySunny  className="text-xl"></TiWeatherPartlySunny > <span className="text-purple-400">Seasonlity</span>  </span> {seasonality}</h2>
      <div className="card-actions mt-2">
      <NavLink to={`/item/${_id}`}> <button className='btn btn-primary'>View details</button> </NavLink>
    </div>
      </div>
      
    </div>
        </div>
    );
};

export default Countrydet;