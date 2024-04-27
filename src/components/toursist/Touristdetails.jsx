import { useLoaderData, useParams } from "react-router";


const Touristdetails = () => {
    const details = useLoaderData()
    const {id} = useParams()
    const cards = details.filter(book => book._id === id )
    console.log(cards);


    
    return (
        <div>
            
        </div>
    );
};

export default Touristdetails;