import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";

const Login = () => {
  const { signInUser, signIngoogle, signIngithub } = useContext(AuthContext);
  const handlelogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");
    console.log(email, password);
    if (!email && !password) {
      toast.error("email password fill up");
      return;
    }
    signInUser(email, password)
      .then((result) => {
        console.log("login", result.user);
        toast.success("successfully login");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("email password not match");
      });
  };
  const handlegoogle = () => {
    signIngoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("successfully login");
      })
      .catch();
  };
  const handlegithub = () => {
    signIngithub()
      .then((result) => {
        console.log(result.user);
        toast.success("successfully login");
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">
              Login now!
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">login</button>
              </div>
              <div className="flex justify-end text-blue-600 underline">
                {" "}
                <NavLink to="/registration">Register</NavLink>{" "}
              </div>
            </form>

            <div className=" space-y-2">
              <div className="form-control mt-1">
                <button
                  onClick={handlegoogle}
                  className="btn  font-bold bg-slate-300 w-3/4 ml-7"
                >
                  {" "}
                  <span>
                    {" "}
                    <FaGoogle className="text-2xl"></FaGoogle>{" "}
                  </span>
                  Login with Google
                </button>
              </div>
              <div className="form-control mt-1">
                <button
                  onClick={handlegithub}
                  className="btn  font-bold w-3/4 ml-7 mb-4"
                >
                  {" "}
                  <span>
                    {" "}
                    <FaGithub className="text-2xl"></FaGithub>{" "}
                  </span>
                  Login with Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
