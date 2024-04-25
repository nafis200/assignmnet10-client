



const Homedetails = ({item,setItems ,items}) => {

    const {email, _id} = item
    const handleDelete = id =>{
        fetch(`http://localhost:5006/item/${id}`,{
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data=>{
            const reamining = items.filter(it => it._id !== id)
         console.log(reamining);
         setItems(reamining)
          })
         
    }
    return (
        <div>

            <div className="mt-2 flex gap-4">
            <h2 className="text-2xl text-blue-700">{email}</h2>
            <button onClick={()=>handleDelete(_id)} className="btn btn-danger ">X</button>
            </div>
            
        </div>
    );
};

export default Homedetails;