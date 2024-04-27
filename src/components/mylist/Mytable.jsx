

const Mytable = ({data,index,items,setItems}) => {
 
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
      } = data  
 const handleDelete = id =>{
     console.log(id);
 }
  return (
    <tbody>
      <tr>
        <th>{index + 1}</th>
        <td>{spot}</td>
        <td>{countries}</td>
        <td>{location}</td>
        <td>{average_cost}</td>
        <td> <button onClick={()=>handleDelete(_id)} className="btn btn-warning">X</button> </td>
        <td> <button className="btn btn-warning">Update</button> </td>
        >
      </tr>
    </tbody>
  );
};

export default Mytable;
