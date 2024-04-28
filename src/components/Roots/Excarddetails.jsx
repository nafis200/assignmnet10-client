
import { FaDollarSign } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { Slide } from 'react-awesome-reveal'
import { Flip } from 'react-awesome-reveal'
const Excarddetails = ({data}) => {
    const {id,image,name,cost,button,available} = data
    return (
        <div className="">
            <div className="card lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl ml-7">
      <figure>
        <Slide direction={'up'}><img
          className="w-[300px] lg:w-full md:w-full"
          src={image}
          alt="Shoes"
        /></Slide>
      </figure>
      <div className="card-body">
      <Flip><h2 className="card-title mt-9"><span className='flex mb-7 lg:mb-7 md:mb-7'></span> <span className="font-extralight text-gray-400">Paribahan:</span> <span className="text-purple-400">{name}</span> </h2></Flip>
      <Flip><h2 className='font-bold flex items-center gap-2 text-green-400'> <span className="text-orange-500"> <FaDollarSign></FaDollarSign> </span>cost <span className='text-red-500'>{cost}</span> </h2></Flip>
      <Flip><h2 className='font-bold flex items-center gap-2 text-green-400'> <span className="text-blue-500"></span>Available <span className='text-red-500'>{available}</span> </h2></Flip>
      </div>
     <div className="p-6">
     <button className="btn btn-primary w-full ">{button}</button>
     </div>
    </div>
        </div>
    );
};

export default Excarddetails;