
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Homedetails = ({ item, setItems, items }) => {
  const { email, _id } = item;
  const handleDelete = (id) => {
    fetch(`http://localhost:5006/item/${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        const reamining = items.filter((it) => it._id !== id);
        console.log(reamining);
        setItems(reamining);
      });
  };
  const updateButton = (id) => {
    console.log("hellow");
    const updateuser = { email: "nafis ahamed" };
    fetch(`https://module-57-2.vercel.app/item/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updateuser)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }

         location.reload()

           

        // const array = items.filter(
        //   (obj, index, self) =>
        //     index === self.findIndex((t) => t.email === obj.email)
        // );
        // console.log(array);
      });
     
  };
  return (
    <div>
      <div className="mt-2 flex gap-4">
        <h2 className="text-2xl text-blue-700">{email}</h2>
        <button onClick={() => handleDelete(_id)} className="btn btn-danger ">
          X
        </button>
        <button onClick={() => updateButton(_id)} className="btn btn-danger ">
          U
        </button>
      </div>
    </div>
  );
};

export default Homedetails;
