import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";

const Addinfor = () => {
  const { users } = useContext(AuthContext);

  let names = "";
  let emails = "";
  if (users) {
    const { email, displayName } = users;
    console.log(email);
    console.log(displayName);
    names = displayName;
    emails = email;
  }
  console.log(names, emails);

  return (
    <div>
      <h2 className="lg:text-2xl md:text-xl text-center font-bold">Add spot</h2>

      <form className="card-body">
        <div className="lg:flex md:flex lg:gap-4 gap-2 md:gap-4 justify-center flex">
        <div className="">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            required
          />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input lg:input-lg input-bordered lg:w-[500px] md:w-[250px] w-[150px]"
            required
          />
        </div>
        </div>
      </form>
    </div>
  );
};

export default Addinfor;
