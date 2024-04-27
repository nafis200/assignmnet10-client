import { useContext, useState } from "react";
import { AuthContext } from "../provider/Authprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typewriter,Cursor, useTypewriter } from 'react-simple-typewriter'
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
  
  const [em,setEm] = useState(emails)

  const [typeEffect] = useTypewriter({
     words : ['spot', 'tourist-spot', 
     'picnic spot', 'visiting spot'],
     loop:{},
     typeSpeed:100,
     deleteSpeed:50
  })
 

  const handleform = e=>{
     e.preventDefault()
     const form = e.target 
     const image = form.image.value
     const spot = form.spot_name.value
     const country = form.country_Name.value
     const location = form.location.value
     const description = form.short_description.value
     const average_cost = form.average_cost.value
     const seasonality = form.seasonality.value
     const Travel = form.travel_time.value
     const totaVisitorsPerYear = form.totaVisitorsPerYear.value
     const email = form.User_Email.value
     const name = form.name.value 

     const countries = country.toLowerCase()
     

     const totalValue = {
      image,
      spot,
      countries,
      location,
      description,
      average_cost,
      seasonality,
      Travel,
      totaVisitorsPerYear,email,
      name}
      fetch("https://module-57-2.vercel.app/item", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(totalValue)
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      toast.success("successfully Add");
      console.log(totalValue);
      e.target.reset()
  }

  return (
    <div>
      <h2 className="lg:text-2xl md:text-xl text-center font-bold">Add  <span className="text-purple-400">{typeEffect}</span>  </h2>

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
            type="number"
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
            <span className="label-text">Travel time</span>
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
            placeholder="totalvisitoePerYear"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            name = "totaVisitorsPerYear"
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
            name = "User_Email"
            defaultValue={em}
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
            name = "name"
            defaultValue={Nam}
            required
          />
        </div>
        </div>
        <div className="flex justify-center">
        <input type="submit" className="lg:mt-4 md:mt-4 mt-2 btn btn-primary w-3/4 lg:ml-16" value="Add" />
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Addinfor;
