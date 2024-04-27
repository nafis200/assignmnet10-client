import { useLoaderData, useParams } from "react-router";
import Details from "./Details";


const Touristdetails = () => {
    const details = useLoaderData()
    const {id} = useParams()
    const cards = details.filter(book => book._id === id )
    console.log(cards);


    
    return (
        <div>
           {
            cards.map(card => <Details key={card._id} card = {card}></Details> )
           } 
        </div>
    );
};

export default Touristdetails;