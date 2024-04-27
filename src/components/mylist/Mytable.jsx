import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
const Mytable = ({ data, index, items, setItems }) => {
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
  } = data;
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        fetch(`https://module-57-2.vercel.app/item/${id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            const reamining = items.filter((it) => it._id !== id);
            console.log(reamining);
            setItems(reamining);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };

  return (
    <tbody>
      <tr>
        <th>{index + 1}</th>
        <td>{spot}</td>
        <td>{countries}</td>
        <td>{location}</td>
        <td>{average_cost}</td>
        <td>
          {" "}
          <button onClick={() => handleDelete(_id)} className="btn btn-warning">
            X
          </button>{" "}
        </td>
        <td>
          {" "}
         <NavLink to ={`/updatelist/${_id}`}><button className="btn btn-warning">Update</button></NavLink>
        </td>
      </tr>
    </tbody>
  );
};

export default Mytable;
