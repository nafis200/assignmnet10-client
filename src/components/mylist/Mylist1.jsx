import { useState } from "react";
import { useLoaderData } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import Mytable from "./Mytable";
import { Typewriter,Cursor, useTypewriter } from 'react-simple-typewriter'

const Mylist1 = () => {
  const loader = useLoaderData();
  const { users } = useContext(AuthContext);
  const { email } = users;
  const list = loader.filter((data) => data.email === email);
  const [items, setItems] = useState(list);
  const [typeEffect] = useTypewriter({
    words : ['spot', 'tourist-spot', 
    'picnic spot', 'visiting spot'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:50
 })    
  return (
    <div>
      {
         items.length ? <>
          <h1 className="mt-3 font-bold text-xl text-center mb-10 mt-3">My <span className="text-purple-400">{typeEffect}</span></h1>
         <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Spot_name</th>
              <th>Country_Name</th>
              <th>Location</th>
              <th>Average_cost</th>
              <th>Delete button</th>
              <th>Update Button</th>
            </tr>
          </thead>
          {items.map((data, index) => (
            <Mytable
              key={data._id}
              data={data}
              index={index}
              items={items}
              setItems={setItems}
            ></Mytable>
          ))}
        </table>
      </div>
         </>:<>
          <p className="text-center font-bold mt-5">You cant <span className="text-purple-400">{typeEffect}</span> any item your items list is: 0</p>
         </>
      }
    </div>
  );
};

export default Mylist1;
