import { useLoaderData, useParams } from "react-router";
import Countrydet from "./Countrydet";




const Country = () => {
    const loader = useLoaderData()
    const params = useParams()
    const fil = loader.filter(data => data._id === params.id)
    const {countries} = fil[0]
    // console.log(fil);
    // console.log(countries);
    const country = loader.filter(data => data.countries === countries)
    console.log(country);
    
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1">
            {
                country.map(data => <Countrydet  data={data}></Countrydet> )
            }
        </div>
    );
};

export default Country;