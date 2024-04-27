import { NavLink } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";


const Count = ({data}) => {
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
        <NavLink to = {`/country/${_id}`}>
            <div className="card lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl ml-7">
      <figure>
        <img
          className="w-[300px] lg:w-full md:w-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
      <h2 className="card-title mt-9"><span className='flex mb-7 lg:mb-7 md:mb-7'></span> <span className="font-extralight">Country Name:</span> {countries}</h2>
      <h2 className='font-bold flex items-center gap-2'> <span></span> description <span className="text-gray-400 font-extralight">{description.slice(0,40)}.....</span> </h2>
    
      </div>
      
    </div>
        </NavLink>
    );
};

export default Count;