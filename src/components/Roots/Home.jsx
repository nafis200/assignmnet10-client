import { useState } from "react";
import { useLoaderData } from "react-router";
import Homedetails from "./Homedetails";


const Home = () => {

  const loader = useLoaderData()
  const [items,setItems] = useState(loader)
  console.log(items);
    
    const handleAdd = event =>{
         event.preventDefault();
         const form = event.target 
         const email = form.email.value 
         console.log(email);
         const mail = {email}
         console.log(mail)
         fetch('http://localhost:5006/item',{
      method: 'POST',
      headers:{
         'content-type' : 'application/json'
      },
      body: JSON.stringify(mail)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAdd} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name ="email"
                  required
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
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
         <h2 className="text-2xl text-center mt-5">{items.length}</h2>
         {
            items?.map(item => <Homedetails key={item._id} item={item} setItems={setItems} items={items}></Homedetails> )
         }

      </div>
    </div>
  );
};

export default Home;
