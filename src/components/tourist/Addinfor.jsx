import { useContext, useState } from "react";
import { AuthContext } from "../provider/Authprovider";

const Addinfor = () => {
  const { users } = useContext(AuthContext);
  let names = "nafis"
  let emails = "hellow"
  if (users) {
    const { email, displayName } = users;
    names = displayName
    emails = email
  }
  const [Nam, setNam] = useState(names)
  console.log("user",Nam);
  const [em,setEm] = useState(emails)
  console.log('emails',em);

  const handleform = e=>{
     
  }

  return (
    <div>
      <h2 className="lg:text-2xl md:text-xl text-center font-bold">Add spot</h2>

      <form onSubmit={handleform} className="card-body">
        {/* 1st input */}
        <div className="lg:flex md:flex lg:gap-4 gap-2 md:gap-4 justify-center flex">
        <div className="">
          <label className="label">
            <span className="label-text">image</span>
          </label>
          <input
            type="text"
            placeholder="image url"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            name = "image"
            required
          />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">spot name</span>
          </label>
          <input
            type="text"
            placeholder="spot name"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            name = "spot_name"
            required
          />
        </div>
        </div>
        {/* 2nd input */}
        <div className="lg:flex md:flex lg:gap-4 gap-2 md:gap-4 justify-center flex">
        <div className="">
          <label className="label">
            <span className="label-text">Country_name</span>
          </label>
          <input
            type="text"
            placeholder="Country_name"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            name = "country_Name"
            required
          />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">location</span>
          </label>
          <input
            type="text"
            placeholder="location"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            name = "location"
            required
          />
        </div>
        </div>
        {/* 3rd input */}
        <div className="lg:flex md:flex lg:gap-4 gap-2 md:gap-4 justify-center flex">
        <div className="">
          <label className="label">
            <span className="label-text">Short description</span>
          </label>
          <input
            type="text"
            placeholder="short description"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            name = "short_description"
            required
          />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">average_cost</span>
          </label>
          <input
            type="text"
            placeholder="average_cost"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            name = "average_cost"
            required
          />
        </div>
        </div>
        {/* 4th input */}
        <div className="lg:flex md:flex lg:gap-4 gap-2 md:gap-4 justify-center flex">
        <div className="">
          <label className="label">
            <span className="label-text">seasonality</span>
          </label>
          <input
            type="text"
            placeholder="seasonality"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            name = "seasonality"
            required
          />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">average_cost</span>
          </label>
          <input
            type="number"
            placeholder="travel_time"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            name = "travel_time"
            required
          />
        </div>
        </div>
        {/* 5th input */}
        <div className="lg:flex md:flex lg:gap-4 gap-2 md:gap-4 justify-center flex">
        <div className="">
          <label className="label">
            <span className="label-text">totaVisitorsPerYear </span>
          </label>
          <input
            type="number"
            placeholder="seasonality"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            name = "totaVisitorsPerYear "
            required
          />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input
            type="email"
            placeholder="User Email"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            name = "User Email"
            required
          />
        </div>
        </div>
        {/* 6th input */}
        <div className="md:ml-[90px]">
        <div className="lg:ml-[125px] ml-[30px] md:ml-0 ">
          <label className="label">
            <span className="label-text">User Name </span>
          </label>
          <input
            type="text"
            placeholder="user name"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            name = "name "
            required
          />
        </div>
        </div>
        <div className="flex justify-center">
        <input type="submit" className="lg:mt-4 md:mt-4 mt-2 btn btn-primary w-3/4 lg:ml-16" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default Addinfor;