import { useState } from "react";
import { useLoaderData } from "react-router";
import { useContext } from "react"
import { AuthContext } from "../provider/Authprovider";
import Mytable from "./Mytable";

const Mylist1 = () => {
    const loader = useLoaderData();
    const { users } = useContext(AuthContext);
    const {email} = users 
    const list = loader.filter(data => data.email === email)
    const [items, setItems] = useState(list);
    return (
        <div>
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
     {
        items.map((data,index)=> <Mytable key={data._id} data={data} index={index} items={items} setItems={setItems}></Mytable> )
     }
  </table>
</div>       
        </div>
    );
};

export default Mylist1;