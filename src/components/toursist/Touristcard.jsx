const Touristcard = ({ data }) => {
  const {
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
    <div className="card lg:w-96 md:w-96 w-72 bg-base-100 shadow-xl ml-7">
      <figure>
        <img
          className="w-[300px] lg:w-full md:w-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
      <h2 className="card-title mt-9"><span className='flex mb-7 lg:mb-7 md:mb-7'></span> {spot}</h2>
      </div>
      
    </div>
  );
};

export default Touristcard;
