import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country)
    const [visited,setVisited] = useState(false)

    const handlevisited = ()=>{
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited?"country-visited":"country"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Country Name : {country.name.common}</h3>
            <h4>Country Capital : {country.capital.capital}</h4>
            <h4>Area : {country.area.area}{country.area.area>300000?'Big Country':'Small Country'}</h4>
            <button onClick={handlevisited}>{
            visited?"Visited":"Visit"}</button>
        </div>
    );
};

export default Country;