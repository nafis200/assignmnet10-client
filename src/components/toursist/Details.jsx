

import { FaDollarSign } from "react-icons/fa6";
const Details = ({card}) => {
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
      } = card
    return (
        <div className="mt-20">
      <section className="lg:flex lg:gap-4">
        <div className="lg:flex-1">
          <img
            src={image}
            className="lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] ml-10 lg:ml-20"
            alt=""
          />
        </div>

        <div className=" space-y-2 flex-1">
          <p className="lg:text-3xl mt-5 lg:mt-0 ml-10 lg:ml-0 flex items-center gap-2">
            {spot}
          </p>
          <p className="font-bold ml-10 lg:ml-0 lg:text-2xl">
            {countries}
          </p>
          <hr />
          <p className="font-bold flex items-center gap-2 ml-10 lg:ml-0 mt-4">
           
            <span>
              <FaDollarSign></FaDollarSign>
            </span>
            <span className="text-red-500">{average_cost} <span className="text-black">average cost</span> </span>
          </p>
          <hr />
          <p>
            <span className="lg:text-2xl grid grid-cols-1 lg:ml-0 ml-10 lg:text-3xl md:text-2xl">
              
            </span>
          </p>
          

          <div className=" space-y-3">
            <p className="mt-5 flex justify-start ml-10 lg:ml-0">
             
              <h2 className="font-bold flex items-center gap-2">
               
                <span>
                 
                 
                </span>
          
              </h2>
            </p>
            <p className="flex justify-start ml-10 lg:ml-0">
              
              <h2 className="font-bold flex items-center gap-2">
              
                <span>
                
                </span>
               
              </h2>
            </p>
          </div>
        </div>
      </section>

      
    </div>
    );
};

export default Details;