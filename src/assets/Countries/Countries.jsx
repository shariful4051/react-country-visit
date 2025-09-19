import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countryPromise}) => {
    const countriesData =use(countryPromise)
    const countries = countriesData.countries
    const [visitedCountris,setVisitedCountries] = useState([])
    const [vistedFlags,setVisitedFlags] =useState([])

    console.log(visitedCountris)
    const handleVisitedCountries = (country)=>{
       // console.log(country)
        const newvisitedCountries = [...visitedCountris,country]
        setVisitedCountries(newvisitedCountries)
    }

    const handleFlags =(country)=>{
        const newVisitedFlags =[...vistedFlags,country]
        setVisitedFlags(newVisitedFlags)
    }
    return (
        <div>
            <h1>All Country Details</h1>
            <p>Total Country:{countries.length}</p>
            <p>Visit Country Count:{visitedCountris.length}</p>
            <ol>
                {
                visitedCountris.map(country=><li>Name:{country.name.common}</li>)
            }
            </ol>
            <ol className='visited-country-flag'>
                {
                    vistedFlags.map(country=><li><img className='visited-flag-image' src={country.flags.flags.png} alt={country.flags.flags.alt} /></li>)
                }
            </ol>
         
            
            <div className='countries'>
                {
                    countries.map(country=><Country 
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleFlags={handleFlags}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;